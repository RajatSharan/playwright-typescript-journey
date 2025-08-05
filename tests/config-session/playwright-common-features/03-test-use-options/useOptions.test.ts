
// 🟡 What is test.use()?
// This is used to customize things like viewport size, userAgent, headless mode, etc., per test or globally in config.
import {test,expect} from '@playwright/test'

test('Viewport and user agent test',async({page})=>{

    await page.goto('/')
    const ua = await page.evaluate(()=>navigator.userAgent)
    expect(ua).toContain('chrome')
})

