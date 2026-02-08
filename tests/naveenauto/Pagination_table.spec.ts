import {test,expect} from '@playwright/test'

test('Locator based assertions', async({page})=> {

    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while(true){

       // let isEleExists=await page.locator('//td[text()='Hong Kong]').isVisible;
        let isEleExists=await page.locator('//td[text()='India']/preceding-sibling::td/input[@type='checkbox']').isVisible();
        
        //let isEleExists=await page.locator('//tr[.//td[text()='India']]//input[@type='checkbox']').isVisible;
        if (isEleExists){

            console.log('Ele is found');
            await page.locator('//td[text()='Hong Kong']/preceding-sibling::td/input[@type='checkbox']').check();
            break;
        }
        // click on the Next button for pagination
        let next=page.getByRole('link',{name: 'next'});
        await next.click();
        await page.waitForTimeout(2000);

        if(await next.isDisabled()){
            console.log('pagination is over');
            break;
        }

    }

}



)