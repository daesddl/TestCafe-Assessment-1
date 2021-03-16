import Checkout_InformationPage from '../pages/Checkout_InformationPage'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { Selector } from 'testcafe'

const testData = require('../data/testData.json')
const ValidUser = testData.ValidUsers
const CheckOutInfo = testData.CheckOutInformation

fixture('Missing Mail Information')
    .page(`https://www.saucedemo.com/`)
    .beforeEach(async t => {
        await LoginPage.sumbitLoginForm(ValidUser.username[0],ValidUser.password)
        await t.expect(InventoryPage.PageTitle.exists).ok()
    })

test('Validate Items at Overview', async t => {
    const Inventory_Items_Lenght = Object.keys(testData.Inventory_Items).length

    for(let ItemsToValidate = 0; ItemsToValidate < Inventory_Items_Lenght; ItemsToValidate++){
        await InventoryPage.AddItemToShoppingCart_ByLabel(InventoryPage.IIE_Label.withExactText(testData.Inventory_Items[ItemsToValidate].Name))
        await t.click(ShoppingCartPage.CheckOutBtn)
        await t.expect(Checkout_InformationPage.Overview_Title.innerText).eql('Checkout: Your Information')
        await t.typeText(Checkout_InformationPage.FirstName_TextBox, CheckOutInfo[3].FirstName)
        await t.typeText(Checkout_InformationPage.LastName_TextBox, CheckOutInfo[3].LastName)
        await t.typeText(Checkout_InformationPage.ZipCode_TextBox, CheckOutInfo[3].ZipCode)
        await t.click(Checkout_InformationPage.Continue_Button)
        for(let idx = 0; idx <= ItemsToValidate; idx++){
            const Expected_Name = Selector('.inventory_item_name').withExactText(`${testData.Inventory_Items[idx].Name}`)
            await t.expect(Expected_Name.exists).ok()
        }
        await t.click(Checkout_InformationPage.Cancel_Button)
    }
})