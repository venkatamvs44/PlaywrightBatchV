import{test, expect} from "@playwright/test"
import { log } from "console";

test('Flipkart tests', async ({page})=>{
await page.goto('https://www.flipkart.com/');
await page.waitForTimeout(3000);
await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
await page.locator("//img[@src='https://rukminim2.flixcart.com/fk-p-flap/480/80/image/dbd07c8f0d822f95.jpg?q=20']").click()
await page.waitForTimeout(2000)
}
)
