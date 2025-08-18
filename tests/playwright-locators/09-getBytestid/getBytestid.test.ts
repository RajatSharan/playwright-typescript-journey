import {test,expect} from "@playwright/test";
import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Get by testid', async ({ page }) => {

    await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
    await page.getByTestId("delete-btn").click()
    const text=page.getByTestId("status-message")
    expect(text).toContainText("Ready to go!")

})
