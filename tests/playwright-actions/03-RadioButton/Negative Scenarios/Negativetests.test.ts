import {test,expect} from '@playwright/test'
import { BASE_URL} from '../../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Forms'}).click()

})

test("Click the Male radio button, and then immediately click the Female radio button.",async({page})=>{

    const maleButton= page.locator("//input[@value='male']")
    await maleButton.check()
    console.log("Male is selected now", await maleButton.isChecked())
    await expect(maleButton).toBeChecked()
    const femaleButton= page.locator("//input[@value='female']")
    await femaleButton.check()
    console.log("Female is selected now", await femaleButton.isChecked())
     await expect(femaleButton).toBeChecked()
     await expect(maleButton).not.toBeChecked();
    console.log("Male is unchecked", await maleButton.isChecked())

})