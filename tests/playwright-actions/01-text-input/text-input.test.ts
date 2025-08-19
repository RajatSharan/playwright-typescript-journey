
import {test,expect} from '@playwright/test'
import { BASE_URL} from '../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Forms'}).click()

})

test("Enter the values in FirstName ",async({page})=>{

    const firstNameInput= await page.locator("//input[@id='firstName']")
    await firstNameInput.fill("RAJAT SHARAN")
    await expect(firstNameInput).toHaveValue("RAJAT SHARAN")
})

test("Enter the valid Email on Email InputFeild",async({page})=>{

    const enterEmailAddress=  page.locator('#email')
    await enterEmailAddress.fill("rajatsharan05@gmail.com")
    await expect(enterEmailAddress).toHaveValue("rajatsharan05@gmail.com")

})

test("Enter the invalid Email ",async({page})=>{

    await  page.locator("//input[@id='email']").fill("rajatsharan05")
    await page.keyboard.press("Tab")
    const invalidErrorMessage = page.locator("//span[text()='Please enter a valid email address.']")
    const errorMessage=await invalidErrorMessage.textContent()
    await expect(invalidErrorMessage).toBeVisible()
})
