import {test,expect} from '@playwright/test'

test.use({headless:true}) //Force headless in your test file (for debugging only)

test('Headless mode test',async({page})=>{

    await page.goto('/')
    await expect(page).toHaveTitle(/Playwright/)

})