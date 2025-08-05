import { test, expect } from '@playwright/test';

test('Use testId attribute', async ({ page }) => {
  await page.goto('/login');
  await page.getByTestId('username-input').fill('admin');
  await page.getByTestId('password-input').fill('123456');
});