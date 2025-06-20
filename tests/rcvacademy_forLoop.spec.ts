import{test, expect} from "@playwright/test"

test('rcvacademy_IteratingLoop',async ({page})=>{
    await page.goto('https://training.rcvacademy.com');
   await expect(page).toHaveTitle('RCV Academy & Software Testing Mentor | Launch your Software Testing Career!');
   await page.waitForTimeout(1000)
   
   const listsection=page.locator("//div[@class='dynamic-text'][1]")
console.log(await listsection.count())

for (const listitemonpage of await listsection.getByRole('listitem').all())
    console.log(await listitemonpage.textContent())

//for (const row of await page.getByRole('listitem').all())
 // console.log(await row.textContent());

}
)
