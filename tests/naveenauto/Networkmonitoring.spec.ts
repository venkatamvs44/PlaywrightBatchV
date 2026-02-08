import{test, expect} from '@playwright/test'

test('network monitoring @network-smoke', async({page})=>{
    // Listeners for req, res methods
page.on('request', async req =>{
console.log('outgoing request', req.method(), req.url());
});
page.on('response', async res=>{
console.log('incoming response', res.status(), res.url());
});
//await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', {waitUntil: 'load'});
//await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', {waitUntil: 'networkidle'});
await page.getByRole('link', {name: 'iPhone'}).first().click();
//page.getByText('iPhone',)
console.log('---------Networking is DONE----------')
})

