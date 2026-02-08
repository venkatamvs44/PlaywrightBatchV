import {test, expect} from '@playwright/test';

test('Download file', async({page})=>
{

    await page.goto('https://the-internet.herokuapp.com/download');
    const downloadpromise=page.waitForEvent('download');
    await page.locator('//a[.="db.json"]').click()
    const download=await downloadpromise
    
    let savedpath='download/db.json'     // specify the path , outside of the tests folder.
    await download.saveAs(savedpath)

  await expect(download.suggestedFilename()).toBe('db.json');   // Assertion to check if the downloaded file name is correct
    //actual file name  vs   expected file name db.json

}
)