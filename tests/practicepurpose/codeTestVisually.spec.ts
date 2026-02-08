//import { expect } from "allure-playwright";
import { test, expect } from '@playwright/test';

test('homepage to test visually',async({page})=>
{
await page.goto('https://playwright.dev/');
await expect(page).toHaveScreenshot();  // This will take a screenshot of the entire page
await expect(page).toHaveScreenshot({ fullPage: true }); // This will take a full page screenshot
// await expect(page).toHaveScreenshot({ mask: ['#header'] }); // This will take a screenshot of th//e page with the header masked
//  await expect(page).toHaveScreenshot({ animations: 'disabled' }); // This will take a            
//  screenshot of the page with animations disabled      
//  await expect(page).toHaveScreenshot({ timeout: 5000 }); // This will take a screenshot with a timeout of 5 seconds 
// await expect(page).toHaveScreenshot({ maxDiffPixels: 100 }); // This will take a screenshot with a maximum difference of 100 pixels
//  await expect(page).toHaveScreenshot({ threshold: 0.1 }); // This will take a screenshot with a threshold of 0.1
// await expect(page).toHaveScreenshot({ mask: ['#header', '#footer'] }); //       
// This will take a screenshot of the page with the header and footer masked

})

