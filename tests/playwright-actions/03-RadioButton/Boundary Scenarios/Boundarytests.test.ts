import {test,expect} from '@playwright/test'
import { BASE_URL} from '../../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Forms'}).click()

})

test("Minimum Boundary (No Selection):",async({page})=>{

    //Action: Do not select any radio button.

    const maleButton= page.locator("//input[@value='male']")
    console.log("Male is selected now", await maleButton.isChecked())


})

test("Maximum Boundary (One Selection):",async({page})=>{

    const maleButton= page.locator("//input[@value='male']")
    await maleButton.check()
    console.log("Male is selected now", await maleButton.isChecked())
    const femaleButton= page.locator("//input[@value='female']")
    console.log("Female is selected now", await femaleButton.isChecked())


})