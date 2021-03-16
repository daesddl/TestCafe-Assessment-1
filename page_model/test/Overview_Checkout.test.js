import Checkout_InformationPage from '../pages/Checkout_InformationPage'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'

const testData = require('../data/testData.json')
const ValidUser = testData.ValidUsers
const CheckOutInfo = testData.CheckOutInformation

fixture('Missing Mail Information')
    .page(`https://www.saucedemo.com/`)
    .beforeEach(async t => {
        await LoginPage.sumbitLoginForm(ValidUser.username[0],ValidUser.password)
        await t.expect(InventoryPage.PageTitle.exists).ok()
        await InventoryPage.AddItemToShoppingCart_ByLabel(InventoryPage.IIE_Label.withExactText(`${testData.Inventory_Items[0].Name}`))
        await t.click(ShoppingCartPage.CheckOutBtn)
    })

test('Overview Checkout', async t => {
    await t.typeText(Checkout_InformationPage.FirstName_TextBox, CheckOutInfo[3].FirstName)
    await t.typeText(Checkout_InformationPage.LastName_TextBox, CheckOutInfo[3].LastName)
    await t.typeText(Checkout_InformationPage.ZipCode_TextBox, CheckOutInfo[3].ZipCode)
    await t.click(Checkout_InformationPage.Continue_Button)

    await t.expect(Checkout_InformationPage.Overview_Title.exists).ok()
    await t.expect(Checkout_InformationPage.Overview_Title.innerText).eql('Checkout: Overview')
})