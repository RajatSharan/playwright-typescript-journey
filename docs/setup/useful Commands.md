Get Playwright version: 

npx playwright --version

Update Playwright to the latest version:

npm install -D @playwright/test@latest
npx playwright install --with-deps # Download new browser binaries

Record Test Code with Codegen: Let Playwright generate test code by interacting with a site: 

npx playwright codegen [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)
npx playwright codegen --browser=firefox [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

Run a Specific Test File:

npx playwright test tests/todo.spec.ts

Run Tests by Tag: Define tags in test.describe and run:

// Example in tests/todo.spec.ts
test.describe('@smoke', () => {
  test('should add a todo item', async ({ page }) => {
    // ... test code ...
  });
});

npx playwright test --grep @smoke

Add Reporters in playwright.config.ts

// playwright.config.ts
reporter: [['html'], ['list'], ['json', { outputFile: 'report.json' }]],

tsconfig.json Example (Auto-generated)

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


