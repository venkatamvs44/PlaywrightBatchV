import{test, expect} from "@playwright/test"

test('Locators elements',async ({page})=>{
    await page.goto('https://www.amazon.in');
   await expect(page).toHaveURL('https://www.amazon.in');

   await page.getByLabel('Search Amazon.in').fill('laptop')  // locating by Label
   await page.waitForTimeout(1000) 

   //locate by AltText for Images
await page.getByAltText('Cleaning',{exact:true}).click()
await page.waitForTimeout(1000) 

//locate byText
await page.getByText('Fresh', {exact:true}).click()
await page.waitForTimeout(1000) 
//Await Page.fill(“#name”, ‘venkat’);  (use it directly instead of locator)

}
)

