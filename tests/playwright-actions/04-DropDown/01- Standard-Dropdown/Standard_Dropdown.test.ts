import { test,expect } from '@playwright/test';

import { BASE_URL } from '../../config';

test.beforeEach(async({page})=>{

    page.goto(BASE_URL)
    await page.getByRole("button",{name:'Advanced Elements'}).click()

})

test("Interacting with the Standard Dropdown, Select by Option",async({page})=>{

    const countrySelect= page.locator("//select[@id='country']")
    await countrySelect.selectOption("United Kingdom")
    
    // await expect(countrySelect).toContainText("United Kingdom")
    // console.log("Value selected is correct", await countrySelect.isVisible())
    // await countrySelect.selectOption("Australia")
    // const selectOption= countrySelect.locator("option:checked")
    // await expect(selectOption).toHaveText("Australia")

    await countrySelect.selectOption("ca")
     //const selectOptionCountry= countrySelect.locator('option:checked')
     await expect(countrySelect).toHaveValue("ca")
})

test("Interacting with the Standard Dropdown, Select by Value",async({page})=>{

    const countrySelect= page.locator("//select[@id='country']")
    await countrySelect.selectOption("ca")
     await expect(countrySelect).toHaveValue("ca")
})

