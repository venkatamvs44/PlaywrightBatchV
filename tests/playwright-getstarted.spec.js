import { test, expect } from '@playwright/test';

test('Playwright docs — Get started and How to install', async ({ page }) => {
  // 1. Open https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // 2. click on Get started
  await page.getByRole('link', { name: /Get started/i }).first().click();
  await page.waitForLoadState('networkidle');

  // 3. click on How to install playwright
  const howToInstall = page.getByRole('link', { name: /How to install/i });
  if (await howToInstall.count() > 0) {
    await howToInstall.first().click();
  } else {
    // fallback: click any link that contains 'install' and 'playwright'
    await page.locator('a:has-text("install")').filter({ hasText: /playwright/i }).first().click();
  }
  await page.waitForLoadState('networkidle');

  // 4. Assert init playwright@latest is visible
  const locator = page.locator('text=init playwright@latest');
  await expect(locator).toBeVisible({ timeout: 10000 });

  // 5. Assert npx playwright show-report is visible
  const showReportLocator = page.locator('text=npx playwright show-report', { exact: false });
  await expect(showReportLocator).toBeVisible({ timeout: 10000 });
});
