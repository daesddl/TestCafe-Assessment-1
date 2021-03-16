import Checkout_InformationPage from '../pages/Checkout_InformationPage'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'

const testData = require('../data/testData.json')
const ValidUser = testData.ValidUsers
const MissingInfo_Errors = testData.CheckOutInformation

fixture('Missing Mail Information')
    .page(`https://www.saucedemo.com/`)
    .beforeEach(async t => {
        await LoginPage.sumbitLoginForm(ValidUser.username[0],ValidUser.password)
        await t.expect(InventoryPage.PageTitle.exists).ok()
        await InventoryPage.AddItemToShoppingCart_ByLabel(InventoryPage.IIE_Label.withExactText(`${testData.Inventory_Items[0].Name}`))
        await t.click(ShoppingCartPage.CheckOutBtn)
    })

test(`Missing Information: ${MissingInfo_Errors[0].Error}`, async t => {
    await t.click(Checkout_InformationPage.Continue_Button)

    await t.expect(Checkout_InformationPage.Error_Message.exists).ok()
    await t.expect(Checkout_InformationPage.Error_Message.innerText).eql(MissingInfo_Errors[0].Error)
})

test(`Missing Information: ${MissingInfo_Errors[1].Error}`, async t => {
    await t.typeText(Checkout_InformationPage.FirstName_TextBox, MissingInfo_Errors[1].FirstName)
    await t.click(Checkout_InformationPage.Continue_Button)

    await t.expect(Checkout_InformationPage.Error_Message.exists).ok()
    await t.expect(Checkout_InformationPage.Error_Message.innerText).eql(MissingInfo_Errors[1].Error)
})

test(`Missing Information: ${MissingInfo_Errors[2].Error}`, async t => {
    await t.typeText(Checkout_InformationPage.FirstName_TextBox, MissingInfo_Errors[2].FirstName)
    await t.typeText(Checkout_InformationPage.LastName_TextBox, MissingInfo_Errors[2].LastName)
    await t.click(Checkout_InformationPage.Continue_Button)

    await t.expect(Checkout_InformationPage.Error_Message.exists).ok()
    await t.expect(Checkout_InformationPage.Error_Message.innerText).eql(MissingInfo_Errors[2].Error)
})