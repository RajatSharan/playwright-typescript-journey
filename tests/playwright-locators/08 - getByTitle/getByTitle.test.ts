import {test,expect} from "@playwright/test";

import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Get by title', async ({ page }) => {

    const button =page.getByTitle('Save Changes to your profile')
    await expect(button).toBeVisible()
    const titleValue = await button.getAttribute('title')
    console.log(titleValue)
    expect(titleValue).toBe('Save Changes to your profile')

})