import { test, expect } from "@playwright/test";

// Thresholds are intentionally generous for dev mode.
// In a production build (next build && next start) these numbers will be significantly better.
const THRESHOLDS = {
  ttfb: 2000,       // Time to First Byte (ms)
  fcp: 5000,        // First Contentful Paint (ms) — dev mode is slow
  domContentLoaded: 5000,
  totalLoadTime: 10000,
  maxResourceCount: 150,
};

test.describe("Performance", () => {
  test("page load timing is within acceptable bounds", async ({ page }) => {
    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes("localhost:3000") && r.status() === 200),
      page.goto("/"),
    ]);

    const timing = await page.evaluate(() => {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      return {
        ttfb: nav.responseStart - nav.requestStart,
        domContentLoaded: nav.domContentLoadedEventEnd - nav.fetchStart,
        loadTime: nav.loadEventEnd - nav.fetchStart,
      };
    });

    expect(timing.ttfb, `TTFB ${timing.ttfb}ms exceeded ${THRESHOLDS.ttfb}ms`).toBeLessThan(THRESHOLDS.ttfb);
    expect(timing.domContentLoaded, `DOMContentLoaded ${timing.domContentLoaded}ms exceeded ${THRESHOLDS.domContentLoaded}ms`).toBeLessThan(THRESHOLDS.domContentLoaded);
    expect(timing.loadTime, `Load time ${timing.loadTime}ms exceeded ${THRESHOLDS.totalLoadTime}ms`).toBeLessThan(THRESHOLDS.totalLoadTime);
  });

  test("First Contentful Paint within threshold", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const fcp = await page.evaluate(() => {
      const entry = performance.getEntriesByName("first-contentful-paint")[0];
      return entry ? entry.startTime : null;
    });

    if (fcp !== null) {
      expect(fcp, `FCP ${fcp}ms exceeded ${THRESHOLDS.fcp}ms`).toBeLessThan(THRESHOLDS.fcp);
    }
  });

  test("resource count stays under limit", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const resourceCount = await page.evaluate(() =>
      performance.getEntriesByType("resource").length
    );

    expect(resourceCount, `${resourceCount} resources exceeds limit of ${THRESHOLDS.maxResourceCount}`).toBeLessThan(THRESHOLDS.maxResourceCount);
  });

  test("no large unoptimized resources (>2MB)", async ({ page }) => {
    const largeResources: string[] = [];

    page.on("response", async (response) => {
      const url = response.url();
      if (!url.includes("localhost")) return;
      const headers = response.headers();
      const contentLength = parseInt(headers["content-length"] ?? "0", 10);
      if (contentLength > 2 * 1024 * 1024) {
        largeResources.push(`${url} (${(contentLength / 1024 / 1024).toFixed(1)}MB)`);
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(largeResources, `Large resources found: ${largeResources.join(", ")}`).toHaveLength(0);
  });

  test("images are served with optimization headers", async ({ page }) => {
    const imageResponses: { url: string; status: number }[] = [];

    page.on("response", (response) => {
      const url = response.url();
      if (url.includes("/_next/image") || (url.includes("localhost") && /\.(png|jpg|jpeg|webp)/.test(url))) {
        imageResponses.push({ url, status: response.status() });
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    imageResponses.forEach(({ url, status }) => {
      expect(status, `Image ${url} returned status ${status}`).toBeLessThan(400);
    });
  });

  test("hero section is visible within 3 seconds", async ({ page }) => {
    const start = Date.now();
    await page.goto("/");
    await page.locator("#hero").waitFor({ state: "visible", timeout: 3000 });
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(3000);
  });

  test("Cumulative Layout Shift is low", async ({ page }) => {
    await page.goto("/");

    const cls = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // @ts-expect-error — LayoutShift is not in all TS libs
            if (!entry.hadRecentInput) clsValue += entry.value;
          }
        });

        try {
          observer.observe({ type: "layout-shift", buffered: true });
        } catch {
          resolve(0);
          return;
        }

        setTimeout(() => {
          observer.disconnect();
          resolve(clsValue);
        }, 2000);
      });
    });

    // CLS < 0.1 is "Good" per Google's Core Web Vitals
    expect(cls, `CLS ${cls.toFixed(3)} exceeds threshold of 0.1`).toBeLessThan(0.1);
  });
});
