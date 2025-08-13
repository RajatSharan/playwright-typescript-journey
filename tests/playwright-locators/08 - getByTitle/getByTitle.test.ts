import {test,expect} from "@playwright/test";

test('Get by title', async ({ page }) => {

    await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
    const button =page.getByTitle('Save Changes to your profile')
    await expect(button).toBeVisible()
    const titleValue = await button.getAttribute('title')
    console.log(titleValue)
    expect(titleValue).toBe('Save Changes to your profile')

})