import{expect, type Locator, type Page} from "@playwright/test"


export class HomePage

{
    readonly page:Page
    readonly searchTf : Locator
    readonly searchBtn : Locator
    readonly Appleprodlink : Locator
    readonly user: Locator

    constructor(page:Page)
    {
        this.page=page
        this.searchTf= page.getByPlaceholder('Search Amazon.in')
        this.searchBtn = page.locator('#nav-search-submit-button')
        this.Appleprodlink= page.locator("//div[@role='listitem']//span[contains(.,'Apple')]")
        
    }

    async searchProduct(productName:string)
    {
        await this.searchTf.fill(productName)
        await this.searchBtn.click()
        await this.page.waitForTimeout(5000)
    }

}
