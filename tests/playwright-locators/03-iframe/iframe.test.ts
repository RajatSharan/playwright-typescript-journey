import { test,expect } from '@playwright/test';


test('Iframe handling',async({page})=>{

    await page.goto('/tests/playwright-locators/Playwright Locator Practice.html')
    const iframe= page.frameLocator('iframe')
    await iframe.locator('#username').fill('testuser')
    await iframe.locator('#password').fill('password123')
    await iframe.getByRole('button',{name:'Log In'}).click()

})
