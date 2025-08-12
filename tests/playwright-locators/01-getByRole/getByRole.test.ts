import {test,expect} from '@playwright/test'


test('Get by role button example',async({page})=>{

    await page.goto('/tests/playwright-locators/Playwright Locator Practice.html',{timeout:10000})
    await page.getByRole('button',({name:'Submit'})).click()
    await page.getByRole('link',{name:'Click Me Link'}).click()
    await page.getByRole('link',{name:'Home'}).click()

})

test('Get Role by link',async({page})=>{

    await page.goto('/tests/playwright-locators/Playwright Locator Practice.html',{timeout:10000})
    await page.getByRole('link',{name:'Click Me Link'}).click()
    await expect(page).toBeTruthy()
    await page.getByRole('link',{name:'Home'}).click()

})

test('Get Role by alert',async({page})=>{
await page.goto('/tests/playwright-locators/Playwright Locator Practice.html')
await page.getByRole('alert',{name:'Successfully submitted your data!'})
const alertvalue : string = 'Successfully submitted your data!'
await expect(alertvalue).toContain('Successfully')

})