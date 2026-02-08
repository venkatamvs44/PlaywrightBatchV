# Test info

- Name: homepage to test visually
- Location: C:\Playwright\tests\practicepurpose\codeTestVisually.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://playwrightdev.com/
Call log:
  - navigating to "https://playwrightdev.com/", waiting until "load"

    at C:\Playwright\tests\practicepurpose\codeTestVisually.spec.ts:6:12
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph: Check if there is a typo in playwrightdev.com.
- paragraph
- list:
  - listitem:
    - text: If spelling is correct,
    - link "try running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
    - text: .
- text: DNS_PROBE_FINISHED_NXDOMAIN
- button "Reload"
```

# Test source

```ts
   1 | //import { expect } from "allure-playwright";
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('homepage to test visually',async({page})=>
   5 | {
>  6 | await page.goto('https://playwrightdev.com');
     |            ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://playwrightdev.com/
   7 | await expect(page).toHaveScreenshot();  // This will take a screenshot of the entire page
   8 | await expect(page).toHaveScreenshot({ fullPage: true }); // This will take a full page screenshot
   9 | //  await expect(page).toHaveScreenshot({ mask: ['#header'] }); // This will take a screenshot of the page with the header masked
  10 | //  await expect(page).toHaveScreenshot({ animations: 'disabled' }); // This will take a            
  11 | //  screenshot of the page with animations disabled      
  12 | //  await expect(page).toHaveScreenshot({ timeout: 5000 }); // This will take a screenshot with a timeout of 5 seconds
  13 | //  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 }); // This will take a screenshot with a maximum difference of 100 pixels
  14 | //  await expect(page).toHaveScreenshot({ threshold: 0.1 }); // This will take a screenshot with a threshold of 0.1
  15 | //  await expect(page).toHaveScreenshot({ mask: ['#header', '#footer'] }); //       
  16 | // This will take a screenshot of the page with the header and footer masked
  17 |
  18 | })
  19 |
  20 |
```