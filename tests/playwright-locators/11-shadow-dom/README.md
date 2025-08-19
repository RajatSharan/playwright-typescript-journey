# Shadow DOM in Playwright – Quick Recap

Shadow DOM is used by modern web components to encapsulate elements and styles.  
In Playwright, handling **open shadow DOM** is possible, but **closed shadow DOM** is not directly accessible.

---

## 🔹 Types of Shadow DOM

1. **Open Shadow DOM**  
   - Accessible via JavaScript and Playwright locators.
   - Example:
     ```ts
     const host = page.locator('my-custom-element');
     const shadowButton = host.locator('button#submit');
     await shadowButton.click();
     ```

2. **Closed Shadow DOM**  
   - Not directly accessible.
   - Elements are hidden from external DOM queries.
   - Example:  
     If the shadow root is `mode: "closed"`, Playwright cannot locate elements inside it.  
     Workaround → request developer to expose attributes or use test IDs.

---

## 🔹 Real-Time Example

For example, in Chrome’s downloads page (`chrome://downloads/`):

```ts
test('Access shadow DOM', async ({ page }) => {
  await page.goto('chrome://downloads/');

  // Access open shadow root
  const downloadsManager = page.locator('downloads-manager');
  const toolbar = downloadsManager.locator('cr-toolbar');
  await expect(toolbar).toBeVisible();
});
