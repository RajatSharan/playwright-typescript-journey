# Playwright Useful Commands and Configuration Examples

This section provides a quick reference for common Playwright commands and configuration snippets.

## Common Playwright Commands

* **Get Playwright Version:**
    ```bash
    npx playwright --version
    ```

* **Update Playwright to the Latest Version:**
    ```bash
    npm install -D @playwright/test@latest
    npx playwright install --with-deps # Download new browser binaries
    ```

* **Record Test Code with Codegen (Generate Test Code by Interaction):**
    ```bash
    npx playwright codegen [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)
    npx playwright codegen --browser=firefox [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)
    ```

* **Run a Specific Test File:**
    ```bash
    npx playwright test tests/todo.spec.ts
    ```

* **Run Tests by Tag:**
    Define tags using `test.describe`:
    ```typescript
    // Example in tests/todo.spec.ts
    test.describe('@smoke', () => {
      test('should add a todo item', async ({ page }) => {
        // ... test code ...
      });
    });
    ```
    Then run tests with the specified tag:
    ```bash
    npx playwright test --grep @smoke
    ```

## Playwright Configuration Examples

* **Add Reporters in `playwright.config.ts`:**
    You can configure various reporters for your test results in your `playwright.config.ts` file:
    ```typescript
    // playwright.config.ts
    reporter: [['html'], ['list'], ['json', { outputFile: 'report.json' }]],
    ```

## `tsconfig.json` Example (Auto-generated)

This is a typical `tsconfig.json` file auto-generated when you set up Playwright with TypeScript, which ensures proper type checking and compilation:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "types": ["@playwright/test"]
  },
  "include": ["tests/**/*.ts"]
}