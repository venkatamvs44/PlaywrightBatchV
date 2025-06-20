import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
await page.goto('https://www.amazon.in/');

await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
await page.getByRole('button', { name: 'laptop under 35000' }).click();
await page.getByRole('link', { name: 'Sponsored Ad - HP 15, 13th' }).click();
await page.close()
})
