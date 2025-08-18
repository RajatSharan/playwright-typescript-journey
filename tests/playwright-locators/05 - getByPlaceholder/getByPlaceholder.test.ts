import {test} from "@playwright/test";
import { BASE_URL } from "../config";


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test("Get by placeholder",async({page})=>{


await page.getByPlaceholder("Enter your email").fill("rajatsharan@gmail.com")

    
})