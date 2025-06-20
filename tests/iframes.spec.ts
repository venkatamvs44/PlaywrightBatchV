//import { expect } from "@playwright/test";

import{test,expect} from "@playwright/test";

test('iframe', async({page})=>{
await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0');
   await page.waitForTimeout(1000)
   
  let frame=await page.frameLocator("//iframe[@class='w-full h-96']")
   await frame.locator("#username").fill("fghjl")   // locating by placeholder
   await page.waitForTimeout(1000)

})

test.only('nested iframes', async({page})=>{
   await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0');
   await page.waitForTimeout(1000)
   page.getByText('Nested iframe').click()
   //await page.locator("#Nested iframe").click()
   let mainframe= page.frameLocator("//iframe[@class='w-full h-96']")  // parent frame
    let childframe= mainframe.locator('iframe').contentFrame()   // child frame
    await childframe.locator("#email").fill("venkata.mvs@gmail.com")
    await page.waitForTimeout(10000)


})