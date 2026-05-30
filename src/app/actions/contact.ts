"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = { success: true } | { success: false; error: string } | null;

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = formData.get("name")?.toString().trim()    ?? "";
  const email   = formData.get("email")?.toString().trim()   ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const honeypot = formData.get("_trap")?.toString();

  if (honeypot) return { success: false, error: "Invalid submission." };
  if (!name || !email || !message)
    return { success: false, error: "All fields are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { success: false, error: "Please enter a valid email address." };

  try {
    await resend.emails.send({
      from:    "Portfolio Contact <contact@rickycodes.dev>",
      to:      "rickyantonio.codes@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text:    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
