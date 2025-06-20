import{test, expect} from "@playwright/test"
import { log } from "console";

test('Flipkart tests', async ({page})=>{
await page.goto('https://www.flipkart.com/');
await page.waitForTimeout(3000);
await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
await page.getByPlaceholder('Search for products, brands and more').fill('mobile');
await page.keyboard.press('Enter');
await page.waitForTimeout(2000);
page.getByPlaceholder('Search Brand').fill('Apple');
await page.waitForTimeout(3000);
//await page.locator('//button[@type='submit']').click();
//await page.waitForTimeout(3000);
//div[@title='Apple']//div[@class='XqNaEv']
//await page.locator('//div[@type='Apple'])
        //await page.getByRole('checkbox', {name:'XqNaEv'}).check()
    //page.locator("//input[@class='vn9L2C']").click();
   //await page.locator("//div[@title='Apple']")
  // await page.getByRole('checkbox', "//div[@class='XqNaEv']").check();
  //div[@class='_6i1qKy'][normalize-space()='Apple']
    //await page.getByRole('checkbox',{name:'Apple'}).check()
await page.locator("//input[@type='checkbox']/../div[.='Apple']/preceding-sibling::div[@class='XqNaEv']").click();
   await page.waitForTimeout(1000)
   console.log('Checkbox clicked')
        //div[@class='XqNaEv'])

        ////*[@id="container"]/div/div[1]/div[1]/div[2]/div[5]/div/div/div/div
        //*[@id="container"].
        //await page.getByRole('container', {name: 'More'}).click()
    }
)