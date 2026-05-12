import { test, expect } from "@playwright/test";

// SEO is browser-agnostic — only run on one engine.
test.skip(({ browserName }) => browserName !== "chromium", "SEO checks run on Chromium only");

test.describe("SEO and meta tags", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has a non-empty title tag", async ({ page }) => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
    expect(title).toContain("Ricardo");
  });

  test("meta description is present and non-empty", async ({ page }) => {
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(10);
  });

  test("meta description is within recommended length (50–160 chars)", async ({ page }) => {
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description!.length).toBeGreaterThanOrEqual(50);
    expect(description!.length).toBeLessThanOrEqual(160);
  });

  test("Open Graph title is present", async ({ page }) => {
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute("content");
    expect(ogTitle).toBeTruthy();
    expect(ogTitle!.length).toBeGreaterThan(0);
  });

  test("Open Graph description is present", async ({ page }) => {
    const ogDesc = await page
      .locator('meta[property="og:description"]')
      .getAttribute("content");
    expect(ogDesc).toBeTruthy();
    expect(ogDesc!.length).toBeGreaterThan(0);
  });

  test("Open Graph type is set", async ({ page }) => {
    const ogType = await page
      .locator('meta[property="og:type"]')
      .getAttribute("content");
    expect(ogType).toBeTruthy();
  });

  test("Open Graph URL is set", async ({ page }) => {
    const ogUrl = await page
      .locator('meta[property="og:url"]')
      .getAttribute("content");
    expect(ogUrl).toBeTruthy();
    expect(ogUrl).toMatch(/^https?:\/\//);
  });

  test("Twitter card meta tag is present", async ({ page }) => {
    const twitterCard = await page
      .locator('meta[name="twitter:card"]')
      .getAttribute("content");
    expect(twitterCard).toBeTruthy();
  });

  test("html lang attribute is set to a valid value", async ({ page }) => {
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBeTruthy();
    expect(lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/);
  });

  test("page title is unique and descriptive (not just a domain name)", async ({ page }) => {
    const title = await page.title();
    const genericTitles = ["home", "index", "untitled", "localhost"];
    const lower = title.toLowerCase();
    genericTitles.forEach((generic) => {
      expect(lower === generic, `Title "${title}" is too generic`).toBe(false);
    });
  });

  test("canonical or og:url does not point to localhost", async ({ page }) => {
    const ogUrl = await page
      .locator('meta[property="og:url"]')
      .getAttribute("content");
    if (ogUrl) {
      expect(ogUrl).not.toContain("localhost");
    }
  });
});
