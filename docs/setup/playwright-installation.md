# Playwright Installation with TypeScript

This guide provides step-by-step instructions to set up a Playwright project with TypeScript.

## Step-by-Step Installation

1.  **Install Node.js**
    * Download the LTS (Long Term Support) version from [https://nodejs.org](https://nodejs.org).
    * Verify installation in your terminal:
        ```bash
        node -v
        npm -v
        ```

2.  **Create a New Project Directory**
    * Create a new folder for your project and navigate into it:
        ```bash
        mkdir playwright-ts-demo # Or your desired project name, e.g., playwright-typescript-journey
        cd playwright-ts-demo
        ```

3.  **Initialize Node Project**
    * This creates a `package.json` file to manage project dependencies:
        ```bash
        npm init -y
        ```

4.  **Install Playwright + TypeScript**
    * Install the Playwright test runner, TypeScript, and `ts-node` as development dependencies:
        ```bash
        npm install -D @playwright/test typescript ts-node
        ```

5.  **Install Browsers**
    * Playwright bundles browser binaries; this command downloads them:
        ```bash
        npx playwright install
        ```

6.  **Initialize Playwright Config (with TypeScript)**
    * This command sets up the basic folder structure and configuration files:
        ```bash
        npm init playwright@latest
        ```
    * This step will:
        * Create a basic folder structure.
        * Add a `playwright.config.ts` file.
        * Set up `tests/example.spec.ts`.
        * Add `tsconfig.json` for TypeScript support.

7.  **Folder Structure After Initialization**
    * After `npm init playwright@latest`, your project directory will resemble this:
        ```
        playwright-ts-demo/
        ├── tests/
        │   └── example.spec.ts
        ├── test-results/
        ├── playwright-report/
        ├── playwright.config.ts
        ├── package.json
        ├── tsconfig.json # Added by npm init playwright@latest
        ```

## Running Tests and Reports

* **Run the Example Test:**
    ```bash
    npx playwright test
    ```
* **Open HTML Report:**
    ```bash
    npx playwright show-report
    ```
* **Run in UI Mode:**
    ```bash
    npx playwright test --ui
    ```

## Example Test Code (`tests/example.spec.ts`)

```typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('[https://playwright.dev/](https://playwright.dev/)');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('[https://playwright.dev/](https://playwright.dev/)');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});