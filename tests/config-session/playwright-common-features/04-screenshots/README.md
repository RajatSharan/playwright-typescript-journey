```md
# 🖼️ Screenshots with Timestamp

Capture screenshots with dynamic file names to avoid overwriting.

### 🧪 Example
```ts
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
await page.screenshot({ path: `screenshots/homepage-${timestamp}.png` });