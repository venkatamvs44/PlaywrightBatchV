import excel, { Workbook, Worksheet } from 'exceljs'
//csv-parse
//import { csv } from 'csv-parse'

import {test, expect} from '@playwright/test'

import tdata from '../testdata2.json'

tdata.forEach(({username,password,url},index)=>
{
    test(`Loginwithcredential #${index+1}`, async({page})=>
{
    //test.slow();
await page.goto(url);
await page.locator('#username').fill(username);
await page.locator('#password').fill(password);
await page.locator('#submit').click()
await page.waitForTimeout(2000);
})

})