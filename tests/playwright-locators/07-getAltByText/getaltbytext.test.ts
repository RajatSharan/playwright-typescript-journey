import {test,expect} from "@playwright/test";

test("Get by text exact and regex",async({page})=>{

await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
await page.getByAltText("Blue placeholder image with sample text")


})