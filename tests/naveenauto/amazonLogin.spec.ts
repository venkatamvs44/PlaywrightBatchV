import{test, expect} from '@playwright/test'

test('amazon Login', async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.getByRole('button', {name: 'Expand Account and Lists'}).click();
    await page.getByText('Sign in', {exact: true}).click();
    //await page.locator('//span[contains(normalize-space(), "Sign in")][@class="nav-action-inner"]').click();
    await page.getByRole('textbox', {name: 'Enter mobile number or email'}).click();
    await page.getByRole('textbox', {name: 'Enter mobile number or email'}).fill('venkata.mvs@gmail.com');
    //await page.locator(//input['#ap_email_login'][@name='email']).fill('venkata.mvs@gmail.com');
   //await page.waitForTimeout(2000);
   await page.getByRole('button', {name: 'Continue'}).click();
    //await page.getByText('Continue', {exact: true}).click();
    await page.waitForTimeout(2000);
    console.log('Login Username Entered sucessfully')
   await page.getByRole('textbox', {name: 'password'}).click();
   await page.getByRole('textbox', {name: 'password'}).fill('Vijaya@123');
   //await page.getByRole('button', {name: 'Sign-In'}).click();
   //await page.locator("//input[@id='signInSubmit'][@class='a-button-input']").click();
await page.locator("//input[@id='signInSubmit'][@class='a-button-input']").click()
// .getByRole('button', {name: 'Sign-in'}).click();
await page.waitForTimeout(2000)
   console.log('------Venkata User - Login Succesfull----------');
})