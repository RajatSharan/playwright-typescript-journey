import { test,expect } from '@playwright/test';

import { BASE_URL } from '../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Advanced Elements'}).click()

})


test("Scenario 1: Selecting a Single Date",async({page})=>{

    const datePicker = page.locator("//input[@id='startDatePicker']")
    await datePicker.clear()
    await datePicker.waitFor({ state: "visible" });
    await datePicker.click()
    await page.pause()
})
