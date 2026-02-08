
import { test, expect, type Page, type Locator } from '@playwright/test'

//test.beforeAll

test('CalendarTest', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/')

  const date = page.locator("//input[@type='date' and @name='the_date']");
  await date.click();
  console.log(await date.textContent());
  await page.waitForTimeout(2000);

 // await page.pause();
 

})
