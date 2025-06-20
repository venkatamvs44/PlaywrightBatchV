import{test, expect} from "@playwright/test"

test('Locators elements',async ({page})=>{
    await page.goto('https://www.amazon.in');
   await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await page.getByPlaceholder('Search Amazon.in').fill('mobile');   // locating by placeholder
    await page.locator("//input[@type='submit']").click();   // locating by id & performing click
    await page.waitForTimeout(3000);  // pause for 3 sec
    await page.getByRole('link',{name: 'Electronics '}).click();  // locating by Role;
    await page.waitForTimeout(2000);   // pause for 2 sec

    //page.getByRole('link',{name:'Electronics'}).click()

}
)

