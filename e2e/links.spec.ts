import { test, expect } from "@playwright/test";

// Only run link checks on one browser — no need to repeat across all five.
test.skip(({ browserName }) => browserName !== "chromium", "Link checks run on Chromium only");

test.describe("Link integrity", () => {
  test("all internal anchor links resolve to existing sections", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const anchorLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
        .map((a) => a.getAttribute("href"))
        .filter(Boolean) as string[]
    );

    expect(anchorLinks.length, "No internal anchor links found").toBeGreaterThan(0);

    const missing: string[] = [];
    for (const href of [...new Set(anchorLinks)]) {
      const id = href.slice(1);
      const exists = await page.locator(`#${id}`).count();
      if (exists === 0) missing.push(href);
    }

    expect(missing, `Internal anchors missing from DOM: ${missing.join(", ")}`).toHaveLength(0);
  });

  test("all external links return a non-error HTTP status", async ({ page, request }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const externalHrefs = await page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
        .map((a) => a.href)
        .filter((href) => href.startsWith("http") && !href.includes("localhost") && !href.startsWith("mailto"))
    );

    const unique = [...new Set(externalHrefs)];
    expect(unique.length, "No external links found").toBeGreaterThan(0);

    const failed: { url: string; status: number }[] = [];

    // Skip social/auth-walled sites that block automated requests
    const skipDomains = ["linkedin.com", "twitter.com", "x.com", "facebook.com"];

    for (const url of unique) {
      if (skipDomains.some((d) => url.includes(d))) continue;
      try {
        const response = await request.get(url, {
          timeout: 10_000,
          headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-link-checker/1.0)" },
          maxRedirects: 5,
          failOnStatusCode: false,
        });
        if (response.status() >= 400) {
          failed.push({ url, status: response.status() });
        }
      } catch {
        failed.push({ url, status: 0 });
      }
    }

    expect(
      failed,
      `Dead links found:\n${failed.map((f) => `  ${f.status} → ${f.url}`).join("\n")}`
    ).toHaveLength(0);
  });

  test("mailto links have valid email format", async ({ page }) => {
    await page.goto("/");

    const mailtos = await page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]'))
        .map((a) => a.getAttribute("href") ?? "")
    );

    // Site may use scroll-to-contact instead of mailto — only validate if present
    if (mailtos.length === 0) return;

    const emailRegex = /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+/;
    mailtos.forEach((href) => {
      expect(emailRegex.test(href), `Invalid mailto: ${href}`).toBe(true);
    });
  });

  test("no links point to localhost or placeholder URLs", async ({ page }) => {
    await page.goto("/");

    const suspiciousLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
        .map((a) => a.getAttribute("href") ?? "")
        .filter((href) =>
          href.includes("localhost") ||
          href.includes("example.com") ||
          href === "#" ||
          href === "/"
        )
    );

    expect(
      suspiciousLinks,
      `Placeholder/localhost links found: ${suspiciousLinks.join(", ")}`
    ).toHaveLength(0);
  });
});
