import {test} from "@playwright/test";


test("Get by placeholder",async({page})=>{

await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
await page.getByPlaceholder("Enter your email").fill("rajatsharan@gmail.com")

    
})