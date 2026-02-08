/**
 * 
 * @param browserName 
 */
import{test, expect, Page, Locator} from '@Playwright/test'

function openBrowser(browserName='chrome')
{
switch(browserName){
    case 'firefox':
        console.log('open firefox');
        break;
    case 'edge':
        console.log('open edge');
        break;
    default:
        console.log('invalid browserName, hence running in Chrome');
        break;
}
}

openBrowser('chrome');
expect(true).toBeTruthy);

await pageXOffset.locator('//div[@class='elementor-element elementor-element-33c37eb e-con-full e-flex e-con e-child'][1]');



