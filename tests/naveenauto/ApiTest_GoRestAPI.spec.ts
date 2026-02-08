import {test, expect} from '@playwright/test'

const TOKEN='bb69dafdf98d4a269dc54006c9bc42d6e64e54e7b86e827c63bf6283bc3a1dce';

test('Get-ALL users@Smoke', async({request}) =>{
    const response= await request.get('https://gorest.co.in/public/v2/users/', {
        headers: {
            Authoriation: 'Bearer ${TOKEN}',
        }
    });
    expect(response.status()).toBe(200);
    const data=await response.json();
    //response.json().
    console.log(data);
    //console.log(d)
}
)

test('Get-fetch a Single User', async({request}) =>{

    const response=await request.get('https://gorest.co.in/public/v2/users/8229199', {
       headers:{
            Authorization: 'Bearer ${TOKEN}',
        }
    })

    expect(response.status()).toBe(200);
    const data=await response.json();
    console.log(data);
    
})
// Post call
test ('Post-CreateUser', async({request})=> {
    const requestBody=
     {
        name: 'PW Test User',
        email: `pwtest${Date.now()}@gmail.com`,
        gender: 'male',
        status: 'active'
       };
    const response=request.post('https://gorest.co.in/public/v2/users/', {
        headers: {
            Authorization: 'Bearer ${TOKEN}', 
        },
        data: requestBody
    });
    console.log(Date.now());
    //expect(response.status()).toBe(201)
    expect((await response).status()).toBe(201);  // status code check
    //const data=await response.json();
    const data=(await response).json();
    console.log(data);
})



test ('rightclick buttonTest', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@id="name"]').click({button: "right"});
    page.waitForTimeout(2000);
    console.log("rightclicked on the page");
})