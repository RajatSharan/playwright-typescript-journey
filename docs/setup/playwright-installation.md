# Playwright Installation with TypeScript

This guide provides step-by-step instructions to set up a Playwright project with TypeScript.

## Step-by-Step Installation

1.  [cite_start]**Install Node.js** [cite: 89]
    * [cite_start]Download the LTS (Long Term Support) version from [https://nodejs.org](https://nodejs.org). [cite: 90]
    * [cite_start]Verify installation in your terminal: [cite: 91]
        ```bash
        node -v
        npm -v
        ```

2.  [cite_start]**Create a New Project Directory** [cite: 94]
    * [cite_start]Create a new folder for your project and navigate into it: [cite: 95, 96]
        ```bash
        mkdir playwright-ts-demo # Or your desired project name, e.g., playwright-typescript-journey
        cd playwright-ts-demo
        ```

3.  [cite_start]**Initialize Node Project** [cite: 97]
    * [cite_start]This creates a `package.json` file to manage project dependencies: [cite: 98]
        ```bash
        npm init -y
        ```

4.  [cite_start]**Install Playwright + TypeScript** [cite: 99]
    * [cite_start]Install the Playwright test runner, TypeScript, and `ts-node` as development dependencies: [cite: 100]
        ```bash
        npm install -D @playwright/test typescript ts-node
        ```

5.  [cite_start]**Install Browsers** [cite: 101]
    * [cite_start]Playwright bundles browser binaries; this command downloads them: [cite: 102]
        ```bash
        npx playwright install
        ```

6.  [cite_start]**Initialize Playwright Config (with TypeScript)** [cite: 103]
    * [cite_start]This command sets up the basic folder structure and configuration files: [cite: 104]
        ```bash
        npm init playwright@latest
        ```
    * This step will: [cite: 105]
        * Create a basic folder structure. [cite: 106]
        * Add a `playwright.config.ts` file. [cite: 107]
        * Set up `tests/example.spec.ts`. [cite: 108]
        * Add `tsconfig.json` for TypeScript support. [cite: 109]

7.  [cite_start]**Folder Structure After Initialization** [cite: 110]
    * [cite_start]After `npm init playwright@latest`, your project directory will resemble this: [cite: 111]
        ```
        playwright-ts-demo/
        ├── tests/
        │   └── example.spec.ts
        ├── test-results/
        ├── playwright-report/
        ├── playwright.config.ts
        ├── package.json
        ├── tsconfig.json  # Added by npm init playwright@latest
        ```

## Running Tests and Reports

* [cite_start]**Run the Example Test:** [cite: 118]
    ```bash
    npx playwright test
    ```
* [cite_start]**Open HTML Report:** [cite: 120]
    ```bash
    npx playwright show-report
    ```
* **Run in UI Mode:** [cite: 143]
    ```bash
    npx playwright test --ui
    ```

## Example Test Code (`tests/example.spec.ts`)

```typescript
import { test, expect } from '@playwright/test'; [cite: 124]

test('has title', async ({ page }) => { [cite: 125]
  await page.goto('[https://playwright.dev/](https://playwright.dev/)'); [cite: 126]
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); [cite: 127, 128]
});

test('get started link', async ({ page }) => { [cite: 130]
  await page.goto('[https://playwright.dev/](https://playwright.dev/)'); [cite: 131]
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click(); [cite: 132, 133]
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); [cite: 134, 135]
});