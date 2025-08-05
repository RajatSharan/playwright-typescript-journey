import { test } from '@playwright/test';

const tracePath='traces/failure.txt'

test('Trace example test', async ({ page }) => {
  await page.goto('/');
}); 