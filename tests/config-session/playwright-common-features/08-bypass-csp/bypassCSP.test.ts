import { test } from '@playwright/test';

test('Bypass CSP test', async ({ page }) => {
  await page.goto('/');
  await page.addScriptTag({ content: "document.body.style.backgroundColor = 'red';" });
});