import { test, expect } from "@playwright/test";

test.describe("Page structure and stability", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("page loads with 200 status", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
  });

  test("page title is set", async ({ page }) => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test("all sections are present in the DOM", async ({ page }) => {
    const sections = ["#hero", "#about", "#skills", "#projects", "#experience", "#contact"];
    for (const id of sections) {
      await expect(page.locator(id)).toBeAttached();
    }
  });

  test("navbar renders with logo and nav links", async ({ page }) => {
    await expect(page.getByText(/RM\./)).toBeVisible();
    for (const label of ["About", "Skills", "Projects", "Experience", "Contact"]) {
      await expect(page.locator(`a[href="#${label.toLowerCase()}"]`).first()).toBeAttached();
    }
  });

  test("hero section has name and CTA", async ({ page }) => {
    await expect(page.locator("#hero")).toContainText("Ricardo");
    await expect(page.locator('a[href="#contact"]').first()).toBeVisible();
  });

  test("projects section renders project cards", async ({ page }) => {
    const cards = page.locator("#projects article");
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("project filter tabs work correctly", async ({ page }) => {
    await page.locator("#projects").scrollIntoViewIfNeeded();
    const allCards = page.locator("#projects article");
    const totalCount = await allCards.count();

    await page.locator("#projects button", { hasText: "AI" }).click();
    // Wait for Framer Motion exit animations to complete (max ~650ms at 6 items)
    await page.waitForFunction(
      (total) => document.querySelectorAll("#projects article").length < total,
      totalCount,
      { timeout: 3000 }
    );
    const aiCount = await page.locator("#projects article").count();
    expect(aiCount).toBeGreaterThan(0);

    await page.locator("#projects button", { hasText: "UI/UX" }).click();
    await page.waitForFunction(
      (prev) => document.querySelectorAll("#projects article").length !== prev,
      aiCount,
      { timeout: 3000 }
    );
    const uiuxCount = await page.locator("#projects article").count();
    expect(uiuxCount).toBeGreaterThan(0);

    await page.locator("#projects button", { hasText: "All" }).click();
    await page.waitForFunction(
      (total) => document.querySelectorAll("#projects article").length === total,
      totalCount,
      { timeout: 3000 }
    );
    expect(await page.locator("#projects article").count()).toBe(totalCount);
  });

  test("experience section has job entries", async ({ page }) => {
    await page.locator("#experience").scrollIntoViewIfNeeded();
    const entries = page.locator("#experience [data-testid='experience-entry'], #experience article, #experience li, #experience .role, #experience h3");
    await expect(page.locator("#experience")).toContainText("Transdev");
  });

  test("contact section has a contact method", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    // Site uses a contact form + social links rather than a mailto link
    await expect(page.locator("#contact form, #contact a").first()).toBeAttached();
  });

  test("no console errors on page load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors.filter((e) => !e.includes("favicon"))).toHaveLength(0);
  });

  test("all external project links have rel=noopener", async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute("rel");
      expect(rel).toContain("noopener");
    }
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("hamburger menu opens and closes", async ({ page }) => {
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    await expect(page.locator("a", { hasText: "About" }).last()).toBeVisible();

    await menuButton.click();
  });

  test("clicking a mobile menu link closes the drawer", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /toggle menu/i }).click();
    const aboutLink = page.locator("a[href='#about']").last();
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
  });
});
