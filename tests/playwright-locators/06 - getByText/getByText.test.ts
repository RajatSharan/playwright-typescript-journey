import {test,expect} from "@playwright/test";

test("Get by text exact and regex",async({page})=>{

await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
await page.getByText("Hello World")

const title= page.getByText("Hello World")
await expect(title).toContainText("World")
console.log("Text found")

})

