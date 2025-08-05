✅ Benefit

Avoids repeating login steps in every test.

```md
# ⚙️ test.use() Options

`test.use()` lets you customize browser options for each test or globally.

### 🔧 Example options
```ts
test.use({
  viewport: { width: 1280, height: 720 },
  userAgent: 'Playwright Chrome'
});