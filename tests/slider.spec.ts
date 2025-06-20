import {test,expect} from "@playwright/test"

test('first test',async({page})=>{
    test.setTimeout(60000) //setting timeout for 60 seconds

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')  //assertion for title
        //comparision of actual and expected title
        
    await page.locator('#name').fill('xyz123') //filling the name
    await page.fill('#name', 'fghhjgku' ) //filling with different syntax
    await page.locator('#email').fill('xyz1234@gmnail.com') //filling the email

    //type method it is deprecated
    await page.locator('#password').fill('xyz12345') //filling the password
    await page.waitForTimeout(2000)
    await page.locator("//button[.='Register']").click() //clicking on register button
    await page.waitForTimeout(2000) //wait for 2 seconds

    //tag[text()='value'] //locating xpath by text

    //button
    await page.locator("//section[.='Button']").click()
    await page.locator('#btn').click() //yes
    await page.waitForTimeout(2000) //wait for 2 seconds
    let v1 = await page.locator("//span[@class='text-green-600 p-1 px-2 ms-2 rounded-md']").textContent() //to get the text from eleements
    console.log(v1) 

    //assertion
    expect(v1).toContain('Yes') //contain method  is case sensitive

    //link
    await page.getByText('Link').click() //clicking on link
    await page.getByText('Men' , {exact:true}).click() //clicking on men link
    await page.waitForTimeout(2000) //wait for 2 seconds

     //toggle
    //  await page.getByText('Toggle').click() //clicking on toggle
    //  let tog1 = page.locator("//span[@class='relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out']/input[@id='tog']")
    //  //await expect(tog1).toBeVisible()//assertion to check if toggle is visible
    //  await page.locator("//span[@class='relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out']/input[@id='tog']").click({force:true}) //clicking on toggle
                  
})
test('checkbox', async({page}) => {
      //checkbox
    
     await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Check Box').click() //clicking on checkbox
    await page.locator('#domain_a').check()//checking the checkbox 
    await page.locator('#domain_b').check()//checking the checkbox 
    await page.locator('#domain_c').check()//checking the checkbox 
    await page.locator('#domain_d').check()//checking the checkbox 
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})

test('radio button', async({page}) => {
      //radio button
       await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
     await page.getByText('Radio Button').click() //clicking on radio button    
     await page.locator('#attended_e').check() //checking the radio button
     await page.locator('#willin_b').check() //checking the radio button
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})

test('slider', async({page}) => {
    

     //slider
      await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
     await page.getByText('Slider').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 second
    
})

test('dropdown', async({page}) => {
    //dropdown
     await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
      await page.getByText('Dropdown').click() //clicking on dropdown
     await page.waitForTimeout(2000) //wait for 2 second
     await page.locator('#country_code').selectOption('+44') //selecting option from dropdown
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator("#select3").selectOption('India')
    await page.locator("#select5").selectOption('Karnataka')
     await page.locator("//label[.='City']/../select").selectOption('Chikkamagaluru') //selecting option from dropdown using xpath
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})

test('multiselect', async({page}) => {
    
 //multiselect
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    //await page.getByText('Dropdown').click() //clicking on dropdown
    await page.locator("//section[.='Dropdown']").click()
    await page.waitForTimeout(2000) //wait for 2 second
    await page.getByText('Multi Select', {exact:true}).click() //clicking on multiselect
     await page.waitForTimeout(2000) //wait for 2 seconds
    await page.locator('#select-multiple-native').selectOption(['Mens Cotton Jacket...', "John Hardy Women's L...", 'White Gold Plated Pr...']) //selecting multiple options from dropdown
    await page.getByRole('button', {name: 'Add'}).click() //clicking on submit button
    await page.waitForTimeout(2000) //wait for 2 seconds

    //get text for single element 

    let text= await page.locator("//td[@title='Mens Cotton Jacket']").textContent()
    console.log(text) //printing the text of the element;

    //findelements in table multiple elements

    let all = await page.locator("//tbody/tr/td[1]").allInnerTexts()
    console.log(all.length) //geting the count
    console.log(all)

    //assertion 
    expect(all).toContain('Mens Cotton Jacket...') //assertion to check if the text is present in the array
    expect(all).toHaveLength(3) //assertion to check the length of the array

     let all3=await page.locator("//tbody/tr[3]/td[1]").allInnerTexts()
    console.log(all3.length)
    console.log(all3)
   
});

test('Web Table', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Web Table').click() //clicking on Web Table , Static web table.
    await page.waitForTimeout(2000) //wait for 2 secondawait page.getByText('Web Table').click() //clicking on Web Table , Static web table.
    await page.getByText('Dynamic Web Table').click() //clicking on Dynamic Web Table.
       await page.waitForTimeout(1000)

let Itemnames=await page.locator("//tbody/tr/th").allInnerTexts()  // get the Item Name

//tbody/tr[1]/td[2] px-6 py-4 font-bold text-black
let Price=await page.locator("//tbody/tr/td[@class='px-6 py-4 font-bold text-black']").allInnerTexts()  // get the price

await page.waitForTimeout(1000) //wait for 2 second
console.log(`Itemnames: ${Itemnames} Prices: ${Price}`)   // template Literals.

for (let i=0; i<Itemnames.length; i++){
    console.log(`Item: ${Itemnames[i]} - Price: ${Price[i]}`) //printing the item name and price
    
}
})

test('Mouse Actions', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Mouse Actions').click() //clicking on Mouse Actions , tooltip.
    await page.getByText('Mouse hover').click() //clicking on Mouse-over Actions , tooltip.
    await page.locator("//p[.='Actions']/..//li/a[.='Tab']").click()
    await page.waitForTimeout(1000)
    //await page.getByText('Kids', {exact:true}).hover() //hovering over the Kids link
    //await page.getByText("", {exact:true}).hover() //hovering over the Kids link
await page.locator("//div[@class='bg-slate-800 h-10']/ul/li[@class='kids p-4 relative']").hover()
        await page.waitForTimeout(1000)

let list=await page.locator("//section[@class='kids_List']/ul/li").allInnerTexts()
console.log(list)  // printing the list of elements
expect(list).toContain('Kids Fashion') //assertion to check if the list contains Kids
expect(list).toHaveLength(4) //assertion to check the length of the list



//         // let tooltipText = await page.locator("//div[@class='tooltip-inner']").textContent() //getting the text from the tooltip
    // console.log(tooltipText) //printing the tooltip text
    // expect(tooltipText).toBe('Kids') //assertion to check if the tooltip text is correct
    // await page.locator("//div[@class='tooltip-inner']").hover() //hovering over the tooltip
    // await page.waitForTimeout(1000) //wait for 1 second
    // await page.locator("//div[@class='tooltip-inner']").click() //clicking on the tooltip
    // await page.waitForTimeout(1000) //wait for 1 second

}
)

test('doubleclick', async({page}) => {
    
    await page.goto('https://qa-practice.netlify.app/double-click')
await page.waitForTimeout(1000)
await page.locator("#double-click-btn").dblclick() //double clicking on the button
await page.waitForTimeout(1000) //wait for 1 second

});

test.only('drag and drop', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Mouse Actions').click() //clicking on Mouse actions , tooltip.
   // await page.getByText('Mouse hover').click() //clicking on Mouse-hover , tooltip.
    await page.getByText('Drag and Drop').click() //clicking on Drag and Drop
    await page.waitForTimeout(1000) //wait for 1 second
    await page.getByText('Drag Position').click() //clicking on Drag Position
    await page.waitForTimeout(1000) //wait for 1 second
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories')) //dragging the Mobile Charger to Mobile Accessories
    //inside dragTo method , we can pass the Locator, to wehre we want ot drag and drop
    await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories')) //dragging the Laptop Charger to Laptop Accessories
    await page.waitForTimeout(1000)

    


})
