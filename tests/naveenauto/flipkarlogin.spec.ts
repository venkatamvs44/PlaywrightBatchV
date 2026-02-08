import {test, expect} from '@playwright/test'

test('flipkarlogin', async({page})=> {

    await page.goto('https://www.flipkart.com/');
    //await page.getByRole('link', {name: 'Login'}).click();
    //await page.getByText('Login').click();
    let LoginLink=await page.locator('//a[contains(normalize-space(), "Login")][@class="oHCDt4"]')
    console.log(LoginLink.innerText());
await page.waitForTimeout(2000);
    await LoginLink.click();
    await page.waitForTimeout(2000);
    //let phonenumber2=await page.locator('//input[@class="jwCbxy"]/following-sibling::div/div/label[@class="rcR4CN"]');
    //await phonenumber2.click();
    //console.log(phonenumber2.innerText());
    //input[@class='jwCbxy']/following-sibling::div/div/label[@class='rcR4CN']
    //await page.getByLabel('Phone Number', {exact: true}).click();
   await page.getByRole('spinbutton', {name: 'Phone Number'}).click();
   console.log('PhoneNumber clicked');
     await page.waitForTimeout(3000);
    //await page.getByRole('link', {name: 'Login'}).click();
    //await page.waitForTimeout(5000);
   // await page.getByLabel('Phone Number', {exact: true}).fill('9886459792');
    await page.getByRole('spinbutton', {name: 'Phone Number'}).fill('9886459792');
     // await page.waitForTimeout(5000);
    //let phonenumber1=await page.locator('//input[@class="jwCbxy"][@id=1]')
    //await phonenumber1.click();
    //await page.waitForTimeout(2000);
    //await phonenumber1.click();
//await page.getByLabel('Phone Number', {exact: true}).click();
    //let phonenumber=await page.locator('//label[contains(normalize-space(), "Phone Number")]')
   //await phonenumber2.fill('9886459792');
await page.waitForTimeout(2000);
console.log('9886459792 entered successfully');
})

