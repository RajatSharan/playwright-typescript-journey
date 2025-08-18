import { test,expect } from "@playwright/test";
import { BASE_URL } from "../config";

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test("Locating a Specific Product Card's Price",async({page})=>{

    const priceLocator =page.locator("#product-laptop .product-price")
   const priceText = await priceLocator.textContent()
   console.log(priceText)
   expect(priceText).toContain("$1000")
})


test("Finding a Product Card's Heading by Test ID",async({page})=>{

    const productNames=  page.locator(".product-name")
    const itemTitle= await productNames.nth(0).textContent()
    console.log(itemTitle)
    expect(itemTitle).toEqual("Laptop")


})

test("Click on the Smartphone add to Cart button",async({page})=>{

    await page.goto('tests/playwright-locators/Playwright Locator Practice.html')
    const productAddToCart=  page.locator("#product-watch .add-to-cart").click()
})