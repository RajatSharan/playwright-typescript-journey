    import { test,expect } from '@playwright/test';

    import { BASE_URL } from '../../config';

    test.beforeEach(async({page})=>{

        page.goto(BASE_URL)
        await page.getByRole("button",{name:'Advanced Elements'}).click()

    })


    test("Testing the Custom Multi-Select Dropdown",async({page})=>{

        const multSelect= page.locator('#custom-select-trigger')
        await multSelect.click()
        const optionsToSelect = ["JavaScript", "Python", "HTML"];
        for(const option of optionsToSelect){
            await page.locator('#custom-select-options div', { hasText: option }).click()
        }

    })