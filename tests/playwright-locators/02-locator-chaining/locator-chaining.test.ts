import {test,expect} from '@playwright/test'

test('Locator chaining',async({page})=>{

    await page.goto('/tests/playwright-locators/Playwright Locator Practice.html')
    const parent  = page.locator('#parent')
    //await parent.locator('button').click()
    await parent.getByRole('button',{name:'Child Button'}).click()


})
test('Locator chaining example 2',async({page})=>{

    await page.goto('/tests/playwright-locators/Playwright Locator Practice.html')
    const parent = page.locator('.product-card',{hasText:'Gaming Headset'})
    await parent.getByRole('button',{name:'Add to Cart'}).click()
    const productTitle=parent.locator('h4')
    await expect(productTitle).toHaveText('Gaming Headset')
    console.log("Product is getting successfully")
})