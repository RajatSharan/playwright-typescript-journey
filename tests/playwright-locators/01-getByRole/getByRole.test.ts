import {test,expect} from '@playwright/test'
import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});


test('Get by role button example',async({page})=>{


    await page.getByRole('button',({name:'Submit'})).click()
    await page.getByRole('link',{name:'Click Me Link'}).click()
    await page.getByRole('link',{name:'Home'}).click()

})

test('Get Role by link',async({page})=>{


    await page.getByRole('link',{name:'Click Me Link'}).click()
    await expect(page).toBeTruthy()
    await page.getByRole('link',{name:'Home'}).click()

})

test('Get Role by alert',async({page})=>{

await page.getByRole('alert',{name:'Successfully submitted your data!'})
const alertvalue : string = 'Successfully submitted your data!'
await expect(alertvalue).toContain('Successfully')

})