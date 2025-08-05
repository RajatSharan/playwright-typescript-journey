// 🟡 Why use video recording?
// Playwright can record videos of tests. Useful for debugging flaky tests or reviewing test behavior.

import {test} from '@playwright/test'

test('Video recording example',async({page})=>{

    await page.goto('/')
    await page.waitForTimeout(1000) 
})