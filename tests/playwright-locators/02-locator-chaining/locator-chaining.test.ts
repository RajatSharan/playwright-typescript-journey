import {test,expect} from '@playwright/test'

import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Locator chaining',async({page})=>{

    const parent  = page.locator('#parent')
    //await parent.locator('button').click()
    await parent.getByRole('button',{name:'Child Button'}).click()


})
test('Locator chaining example 2',async({page})=>{

    const parent = page.locator('.product-card',{hasText:'Gaming Headset'})
    await parent.getByRole('button',{name:'Add to Cart'}).click()
    const productTitle=parent.locator('h4')
    await expect(productTitle).toHaveText('Gaming Headset')
    console.log("Product is getting successfully")
})