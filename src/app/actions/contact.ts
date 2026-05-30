"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

// In-memory rate limit: max 3 submissions per IP per 10 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = { success: true } | { success: false; error: string } | null;

function buildHtml(name: string, email: string, message: string) {
  const escaped = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0d0d14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d14;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Header -->
        <tr>
          <td style="padding-bottom:32px;text-align:center;">
            <span style="font-size:22px;font-weight:800;color:#f5f5ff;letter-spacing:-0.5px;">
              RM<span style="color:#a855f7;">.</span>
            </span>
          </td>
        </tr>

        <!-- Card -->
        <tr>
          <td style="background:#13131f;border:1px solid #1e1e30;border-radius:16px;padding:36px 32px;">

            <!-- Tag -->
            <p style="margin:0 0 20px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#a855f7;">
              // New Portfolio Message
            </p>

            <!-- Heading -->
            <h1 style="margin:0 0 28px;font-size:24px;font-weight:800;color:#f5f5ff;line-height:1.3;">
              You have a new message from <span style="color:#a855f7;">${escaped(name)}</span>
            </h1>

            <!-- From -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:#0d0d14;border:1px solid #1e1e30;border-radius:10px;padding:16px 20px;">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#94a3b8;">From</p>
                  <p style="margin:0;font-size:15px;color:#f5f5ff;">${escaped(name)}</p>
                  <p style="margin:4px 0 0;font-size:13px;color:#a855f7;">${escaped(email)}</p>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#94a3b8;">Message</p>
            <div style="background:#0d0d14;border:1px solid #1e1e30;border-left:3px solid #9333ea;border-radius:10px;padding:20px;margin-bottom:28px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#f5f5ff;">${escaped(message)}</p>
            </div>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="mailto:${email}?subject=Re: Your message&body=Hi ${escaped(name)},"
                     style="display:inline-block;background:#9333ea;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.3px;">
                    Reply to ${escaped(name)}
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding-top:28px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">
              Sent from your portfolio at
              <a href="https://rickycodes.dev" style="color:#a855f7;text-decoration:none;">rickycodes.dev</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name     = formData.get("name")?.toString().trim()    ?? "";
  const email    = formData.get("email")?.toString().trim()   ?? "";
  const message  = formData.get("message")?.toString().trim() ?? "";
  const honeypot = formData.get("_trap")?.toString();
  const ts       = formData.get("_t")?.toString();

  // Silently succeed for bots — don't reveal detection
  if (honeypot) return { success: true };

  // Reject submissions faster than a human can type (< 1.5s)
  const elapsed = ts ? Date.now() - parseInt(ts, 10) : 0;
  if (elapsed < 1500) return { success: true };

  // Rate limit by IP: max 3 per 10 minutes
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim()
          ?? headerList.get("x-real-ip")
          ?? "unknown";
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (record && now < record.resetAt) {
    if (record.count >= MAX_PER_WINDOW)
      return { success: false, error: "Too many submissions. Please try again later." };
    record.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  if (!name || !email || !message)
    return { success: false, error: "All fields are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { success: false, error: "Please enter a valid email address." };
  if (message.length > 5000)
    return { success: false, error: "Message is too long." };
  if ((message.match(/https?:\/\//gi) ?? []).length > 2)
    return { success: false, error: "Message contains too many links." };

  try {
    await resend.emails.send({
      from:    "Portfolio Contact <contact@rickycodes.dev>",
      to:      "rickyantonio.codes@gmail.com",
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text:    `From: ${name} <${email}>\n\nMessage:\n${message}\n\n---\nSent from rickycodes.dev`,
      html:    buildHtml(name, email, message),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
