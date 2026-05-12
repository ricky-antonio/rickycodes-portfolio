import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("no critical axe violations on page load", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const critical = results.violations.filter((v) =>
      ["critical", "serious"].includes(v.impact ?? "")
    );

    expect(
      critical,
      `Critical/serious accessibility violations:\n${critical
        .map((v) => `  [${v.impact}] ${v.id}: ${v.description}\n    ${v.nodes[0]?.html}`)
        .join("\n")}`
    ).toHaveLength(0);
  });

  test("color contrast meets WCAG AA", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(["color-contrast"])
      .analyze();

    expect(
      results.violations,
      `Color contrast failures:\n${results.violations
        .map((v) => `  ${v.id}: ${v.nodes.map((n) => n.html).join(", ")}`)
        .join("\n")}`
    ).toHaveLength(0);
  });

  test("page has a single h1", async ({ page }) => {
    const h1s = page.locator("h1");
    await expect(h1s).toHaveCount(1);
  });

  test("heading hierarchy does not skip levels", async ({ page }) => {
    const headings = await page.evaluate(() =>
      Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).map((el) =>
        parseInt(el.tagName[1], 10)
      )
    );

    for (let i = 1; i < headings.length; i++) {
      const jump = headings[i] - headings[i - 1];
      expect(jump, `Heading jumped from h${headings[i - 1]} to h${headings[i]}`).toBeLessThanOrEqual(1);
    }
  });

  test("all images have non-empty alt attributes", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      const src = await images.nth(i).getAttribute("src");
      expect(alt, `Image ${src} is missing alt text`).toBeTruthy();
    }
  });

  test("all images load without error (no broken images)", async ({ page }) => {
    const brokenImages = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
      const results = await Promise.all(
        imgs.map((img) =>
          new Promise<{ src: string; broken: boolean }>((resolve) => {
            if (img.complete && img.naturalWidth > 0) {
              resolve({ src: img.src, broken: false });
            } else if (img.complete) {
              resolve({ src: img.src, broken: true });
            } else {
              img.onload = () => resolve({ src: img.src, broken: false });
              img.onerror = () => resolve({ src: img.src, broken: true });
            }
          })
        )
      );
      return results.filter((r) => r.broken).map((r) => r.src);
    });

    expect(
      brokenImages,
      `Broken images found:\n${brokenImages.map((s) => `  ${s}`).join("\n")}`
    ).toHaveLength(0);
  });

  test("all buttons have accessible labels", async ({ page }) => {
    const buttons = page.locator("button");
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const btn = buttons.nth(i);
      const text = (await btn.textContent())?.trim();
      const ariaLabel = await btn.getAttribute("aria-label");
      expect(text || ariaLabel, `Button at index ${i} has no accessible label`).toBeTruthy();
    }
  });

  test("interactive elements are keyboard focusable", async ({ page }) => {
    await page.keyboard.press("Tab");
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON", "INPUT"]).toContain(focused);
  });

  test("external links open in new tab with proper rel", async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute("rel");
      expect(rel, `External link at index ${i} missing rel="noopener noreferrer"`).toContain("noopener");
    }
  });

  test("nav landmark is present", async ({ page }) => {
    await expect(page.locator("nav").first()).toBeAttached();
  });

  test("main landmark is present", async ({ page }) => {
    await expect(page.locator("main")).toBeAttached();
  });

  test("page has a valid lang attribute", async ({ page }) => {
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBeTruthy();
  });
});
