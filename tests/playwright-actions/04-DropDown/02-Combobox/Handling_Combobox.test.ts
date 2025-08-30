    import { test,expect } from '@playwright/test';

    import { BASE_URL } from '../../config';

    test.beforeEach(async({page})=>{

        page.goto(BASE_URL)
        await page.getByRole("button",{name:'Advanced Elements'}).click()

    })

    test("Handling the Combobox (Searchable Dropdown)",async({page})=>{


        const comboxBox= page.locator("#searchableDropdown")
        await comboxBox.click()
        await comboxBox.fill("Syd")
        await page.locator("text=Sydney").click();
        await expect(comboxBox).toHaveValue("Sydney");

    })
