import { test,expect } from '@playwright/test';
import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});


test('Iframe handling',async({page})=>{

    const iframe= page.frameLocator('iframe')
    await iframe.locator('#username').fill('testuser')
    await iframe.locator('#password').fill('password123')
    await iframe.getByRole('button',{name:'Log In'}).click()

})
