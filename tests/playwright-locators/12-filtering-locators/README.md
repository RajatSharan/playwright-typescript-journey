
---

## 📘 README for Filtering Locators

```md
# Filtering Locators – Quick Recap

Playwright provides `filter()` to refine locators.

### 1. Filter by Text
```ts
page.getByRole('row').filter({ hasText: 'Alfreds Futterkiste' });


2. Filter NOT Having Text
page.getByRole('row').filter({ hasNot: page.getByText('UK') });

3. Filter by Child Locator
page.getByRole('row').filter({ has: page.locator('td:has-text("Germany")') });

4. Row Locator Filter
page.getByRole('row', { name: /Germany/ });