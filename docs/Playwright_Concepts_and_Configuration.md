# 🎭 Playwright Testing Notes

This guide covers the fundamentals of Playwright, including how to write your first test, understand configuration settings, test structure, and best practices.

---

## ✅ First Test with Playwright

Playwright tests are straightforward:
- They perform actions.
- They assert the expected state.
- No need to manually wait—Playwright auto-handles actionability checks.
- No need to worry about race conditions—assertions wait for expectations to be met.

### Example Test File

```ts
// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


🧠 Code Breakdown

import { test, expect } from '@playwright/test';
test: Defines a test case.

expect: Used for assertions (like checking the title, element visibility, etc.).

test('has title', async ({ page }) => { ... })
'has title': Descriptive name of the test.

async ({ page }) => {}: Asynchronous test function. page represents a browser tab.

await page.goto('https://playwright.dev/');
Navigates to a URL.

Use { timeout: 60000 } to customize the wait time.

await expect(page).toHaveTitle(/Playwright/);
Validates that the page title includes "Playwright".

Uses a regular expression for flexible matching.

⚙️ Test Configuration in Playwright
📄 Configuration File: playwright.config.ts

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});

Explanation
testDir: Folder where test files are kept.

fullyParallel: Run all tests simultaneously.

retries: Retry failed tests (CI only).

reporter: Use 'html', 'dot', 'line', etc.

baseURL: Used by page.goto('/somepath').

trace: Enables tracing on test retry for debugging.

Disable Parallelism

npx playwright test --workers=1

📈 Reporting Options

reporter: process.env.CI ? 'dot' : 'list';

CLI Option

npx playwright test --reporter=line


🎥 Trace & Screenshots

trace: 'on-first-retry'


Screenshot Comparison

expect: {
  toHaveScreenshot: {
    maxDiffPixels: 10
  }
}


Snapshot Matching

expect: {
  toMatchSnapshot: {
    maxDiffPixelRatio: 0.1
  }
}


🔎 Filtering & Ignoring Tests

testIgnore: '*test-assets',
testMatch: '*todo-tests/*.spec.ts',


🛠 Advanced Config

export default defineConfig({
  outputDir: 'test-results',
  globalSetup: './global-setup',
  globalTeardown: './global-teardown',
  timeout: 30000,
});


outputDir: Save screenshots/videos here.

globalSetup: Runs before all tests.

globalTeardown: Runs after all tests.


🔧 Expect Options

expect: {
  timeout: 5000,
  toHaveScreenshot: { maxDiffPixels: 10 },
  toMatchSnapshot: { maxDiffPixelRatio: 0.1 }
}


🧪 test.fail() vs test.fixme()
test.fail(): Runs the test and expects it to fail.

test.fixme(): Skips the test, marking it as known to fail.

🧱 After Adding a New Dependency

1. Install:

npm install


2. Reload VS Code:

Ctrl+Shift+P → Reload Window

3.Verify:

npm list <package-name>

4 .Run Tests:

npx playwright test


🧑‍💻 VS Code Shortcut
Windows: Ctrl + Shift + X

macOS: Cmd + Shift + X



🌍 Using Environment Variables


Install dotenv:
npm install dotenv


Create .env:

BASE_URL=https://your-qa-env.com


Load in playwright.config.ts:

import * as dotenv from 'dotenv';
dotenv.config();

use: {
  baseURL: process.env.BASE_URL
}


🧩 Global Hooks

globalSetup: require.resolve('./global-setup'),
globalTeardown: require.resolve('./global-teardown'),
Example global-setup.ts

export default async () => {
  console.log("Setting up global environment...");
};

🚀 CLI Overrides
npx playwright test --project=Firefox --reporter=dot

🗂 Tips for Large Projects

Organize tests into folders: tests/login, tests/cart

Use projects for different environments: dev, QA, staging

Keep secrets in .env, never hardcode



