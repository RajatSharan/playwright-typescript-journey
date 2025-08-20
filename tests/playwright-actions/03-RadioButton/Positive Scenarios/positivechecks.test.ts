import {test,expect} from '@playwright/test'
import { BASE_URL} from '../../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Forms'}).click()

})

test("Click the Male radio button.",async({page})=>{

    const radioButton= page.locator("//input[@value='male']")
    await radioButton.check()
    console.log("Male is selected now", await radioButton.isChecked())
    await expect(radioButton).toBeChecked()
})

test("Click the Female radio button.",async({page})=>{

    const radioButton= page.locator("//input[@value='female']")
    await radioButton.check()
    console.log("Female is selected now", await radioButton.isChecked())
    await expect(radioButton).toBeChecked()
})

test("Click the Other radio button.",async({page})=>{

    const radioButton= page.locator("//input[@value='other']")
    await radioButton.check()
    console.log("Other is selected now", await radioButton.isChecked())
    await expect(radioButton).toBeChecked()
})


