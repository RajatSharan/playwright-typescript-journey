
// 🟡 Why use screenshots?
// Helps you visually debug issues. You can add timestamps to avoid overwriting files.


import {test,expect} from '@playwright/test'
import fs from 'fs'


const timestamp = new Date().toISOString().replace(/[:.]/g,'-')
const screenshotPath =`screenshots/homepage-${timestamp}.png`

test('Capture screenshot with timestamp',async({page})=>{

    await page.goto('/')
    await page.screenshot({path:screenshotPath})
    expect(fs.existsSync(screenshotPath)).toBe(true)
})