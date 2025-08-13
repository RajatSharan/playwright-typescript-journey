import {test,expect} from "@playwright/test";

test('Get by label',async({page})=>{

    await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
    await page.getByLabel('Main Page Username').fill('Rajat')

})