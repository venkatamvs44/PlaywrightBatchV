import {test,expect} from "@playwright/test"

test('first test', async({page})=>{
    test.setTimeout(60000)  // setting timeout for 60 sec.
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1'); //navigating to url.
    expect(page).toHaveTitle('DemoApps | Qspiders | Text Box') // Assertion for Title.tovalidate its correct or not.

    await page.locator('#name').fill('venkata')    // filling the Name
   await page.locator('#email').fill('venkata.mvs@gmail.com') // filling the email

    await page.locator('#password').fill('Sree@123') // filling the Password
   await page.locator("//button[.='Register']").click()   // clicking on Register button
    await page.waitForTimeout(2000)  // wait for 2 seconds
       // tag[text()='value']   // locating xpath by text
       // button[text()='Register']

    //button
  await page.locator("//section[.='Button']").click()
  await page.locator("#btn").click()    // yes
    await page.waitForTimeout(5000)   // wait for 2 sec

   let v1= await page.locator("//span[@class='text-green-600 p-1 px-2 ms-2 rounded-md']").textContent()  //to get the 
   console.log(v1)

//assertion
expect(v1).toContain('Yes')  // contain method is case sensitive
}
)

//tagname[@attribute='value']     // x-path
//[attribute name='attribute value']  // css selector.
//https://demoapps.qspiders.com/ui?scenario=1
//span[text()='NText']  with Text function()






