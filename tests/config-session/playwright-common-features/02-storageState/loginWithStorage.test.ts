import {test,expect} from '@playwright/test'

test.use({storageState:'auth/storage.json'})

test('Use storage state to stay logged in',async({page})=>{
    await page.goto('/docs/test-use-options')
})