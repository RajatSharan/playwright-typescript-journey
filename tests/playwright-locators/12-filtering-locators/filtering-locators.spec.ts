import {test,expect} from '@playwright/test'

import { BASE_URL} from '../config'


test.beforeEach(async({page})=>{

    page.goto(BASE_URL)

})


test("Find the table row that contains the text Monitor",async({page})=>{


    const textValue=page.locator('tr').filter({hasText:'Monitor'})
    const getRowValue = await textValue.textContent()
    console.log(getRowValue)
})
