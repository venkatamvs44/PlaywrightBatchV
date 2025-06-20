import {expect, test} from '@playwright/test';

import{Loginpage} from '../pageobjects/loginpage';  // path of the Login page class


test('loginaction', async({page})=>{

    const lgn=new Loginpage(page);   // object of Login page class

    await page.goto('https://demoapps.qspiders.com/ui/login');
    expect(lgn.emailtf).toBeEditable();  //checking if email text field is visible
    await lgn.loginaction('venkata.mvs@gmail.com', '123456789')
    await page.waitForTimeout(1000)

}

)


