
import {test,expect} from '@playwright/test'

test("Navigate using baseURL",async({page})=>{

    await page.goto('/docs/test-use-options')
    await expect(page).toHaveTitle(/Playwright/);


})