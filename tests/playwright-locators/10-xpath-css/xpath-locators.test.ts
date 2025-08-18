import { test, expect } from "@playwright/test";
import { BASE_URL } from "../config"; 

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test("Scenario 1: Locating an Add to Cart button for a specific product",async({page})=>{
  const productCard= page.locator("//div[@id='product-watch']//button[@class='add-to-cart']");
  await productCard.click();
});

test("Scenario 2: Finding a Parent Element",async({page})=>{

  const parentLocator= page.locator("//h4[text()='Smartphone']/following-sibling::span")
  const textContentValue=  await parentLocator.textContent()
  console.log(textContentValue)
  await expect(textContentValue).toEqual("$600")
});

test("Scenario 3 : Using and and or to Combine Conditions",async({page})=>{

  const HeadingName = await page.locator("//h4[text()='Smartwatch' or text()='Smartwatch']")
  const name = await HeadingName.textContent()
  console.log(name)
})

test("Scenario 4 :Finding an Input Field in an Iframe",async({page})=>{

  const frame= page.frameLocator("iframe")
  const usernameInputValue= frame.locator("//input[@id='username']")
  await usernameInputValue.fill("Rajat")
  await expect(usernameInputValue).toHaveValue("Rajat")
})