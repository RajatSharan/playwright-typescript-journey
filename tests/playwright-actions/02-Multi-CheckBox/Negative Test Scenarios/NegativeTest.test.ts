import {test,expect} from '@playwright/test'
import { BASE_URL} from '../../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Forms'}).click()

})

test("check how the application handles invalid or unexpected actions. For checkboxes, this often means ensuring they don't behave in ways they aren't designed to.",async({page})=>{

    //Double-checking an already checked box

    const checkbox= page.locator("input[value='reading']")
    await checkbox.check()
    console.log("Checkbox is checked",await checkbox.isChecked())
    await checkbox.check()
    console.log("Checkbox is checked",await checkbox.isChecked())

      // 2. Double-unchecking an already unchecked box
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
      console.log("Checkbox is checked",await checkbox.isChecked())
     await checkbox.uncheck(); // should not fail
     await expect(checkbox).not.toBeChecked();
    console.log("Checkbox is checked",await checkbox.isChecked())

    //Mutual Exclusivity: Select "Reading", then select "Hiking". Verify that "Reading" remains selected and is NOT automatically deselected.

     const selectReading = page.locator("input[value='reading']")
     await selectReading.check()
     await expect(selectReading).toBeChecked()
     console.log("Reading is checked",await selectReading.isChecked())
     const selectHiking= page.locator("input[value='hiking']")
     await selectHiking.check()
     await expect(selectHiking).toBeChecked();
     console.log("Hiking is checked",await selectHiking.isChecked())
     await expect(selectReading).toBeChecked()
     console.log("Reading is verfied its checked",await selectReading.isChecked())




})