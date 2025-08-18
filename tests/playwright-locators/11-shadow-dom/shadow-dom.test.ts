import { test, expect } from '@playwright/test';
import { BASE_URL } from '../config';

test.beforeEach(async({page})=>{

   await page.goto(BASE_URL)

})

test("should interact with elements inside Shadow DOM (open)",async({page})=>{

  const shadowHost = page.locator("profile-card");
  const userNameLocator = shadowHost.locator("#user-name");
  const textContentValue = await userNameLocator.textContent();
  console.log(textContentValue);
});