import { test,expect } from '@playwright/test';

import { BASE_URL } from '../config'

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Advanced Elements'}).click()

})


test("Scenario 1: Selecting a Single Date",async({page})=>{

    const datePicker = page.locator("//input[@id='departureDateInput']")
    await datePicker.waitFor({ state: "visible" });
    await datePicker.click()
    const targetDate = new Date('2025-10-11T18:30:00.000Z');
    const dataDay = targetDate.toISOString();
    await page.click(`[data-day="${dataDay}"]`);
    await page.pause() 
})




