import {test,expect} from "@playwright/test";
import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Get by label',async({page})=>{

    await page.getByLabel('Main Page Username').fill('Rajat')

})