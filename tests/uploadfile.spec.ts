import {test,expect} from "@playwright/test"

//import path from "path";
import path from "path";

test ("upload Singlefile", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
//await page.locator('#singleFileInput').setInputFiles("C:/Playwright/TestData/Pdf_485847380240624.pdf")
await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../TestData/Pdf_485847380240624.pdf'))
await page.locator("//button[.='Upload Single File']").click()
await page.waitForTimeout(2000);
await expect(page.locator("#singleFileStatus")).toContainText('Pdf_485847380240624') // assertion to confirm the filename is correct.
 
}
)

test.only ("upload Multiplefiles", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
//await page.locator('#singleFileInput').setInputFiles("C:/Playwright/TestData/Pdf_485847380240624.pdf")
await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname, '../TestData/Pdf_485847380240624.pdf'),path.join(__dirname, '../TestData/EAadhaar_venkat.pdf')])
await page.locator("//button[.='Upload Multiple Files']").click()
await page.waitForTimeout(2000);
await expect(page.locator("#multipleFilesStatus")).toContainText('EAadhaar') // assertion to confirm the filename is correct.
}
)
