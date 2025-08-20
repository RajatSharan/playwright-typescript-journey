
import {test,expect} from '@playwright/test'
import { BASE_URL} from '../../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Forms'}).click()

})

test("Positive tests check that the application works as expected when a user performs a valid action.",async({page})=>{

    //Single-select:
    const checkbox= page.locator("input[value='reading']")
    await checkbox.check()
    await expect(checkbox).toBeChecked()
    console.log('Verified its checked', await checkbox.isChecked());

})

test("Multi-select: Select Reading and Coding. Verify that both are checked and their values are submitted.",async({page})=>{

    const selectReading = page.getByRole('checkbox',{name:'Reading'})
    await selectReading.check()
    await expect(selectReading).toBeChecked()
    console.log('Reading checkbox is checked',  await selectReading.isChecked())
    const selectCoding = page.locator("input[value='coding']")
    await selectCoding.check()
    await expect(selectCoding).toBeChecked()
    console.log('Coding checkbox is checked',  await selectCoding.isChecked())

})

test("Deselect: After selecting a hobby, click it again. Verify it becomes unchecked.",async({page})=>{

    const checkhobby= page.getByRole('checkbox',{name:'hiking'})
    await checkhobby.check()
    await expect(checkhobby).toBeChecked()
    console.log("hiking is checked",await checkhobby.isChecked() )
    await checkhobby.uncheck()
    await expect(checkhobby).not.toBeChecked()
    console.log("hiking is unchecked", await checkhobby.isChecked())
})