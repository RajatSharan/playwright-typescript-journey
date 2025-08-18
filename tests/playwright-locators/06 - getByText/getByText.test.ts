import {test,expect} from "@playwright/test";

import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test("Get by text exact and regex",async({page})=>{

await page.getByText("Hello World")

const title= page.getByText("Hello World")
await expect(title).toContainText("World")
console.log("Text found")

})

