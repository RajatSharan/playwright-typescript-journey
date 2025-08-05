---

✅ Benefit

Makes test navigation cleaner and more maintainable.


```md
# 🔐 storageState

**storageState** allows you to save the login session and reuse it across tests.

### 🪪 Steps to use
1. Run a login test to store auth data:
```ts
await page.context().storageState({ path: 'auth/storage.json' });


// 🟡 What is storageState?
// It stores login/session cookies and localStorage so you don’t have to log in again and again in tests.
// First, you generate a storage file using login script. Then you reuse it in your tests.