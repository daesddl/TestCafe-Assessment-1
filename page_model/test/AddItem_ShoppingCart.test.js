import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { Selector } from 'testcafe'

const UserData = require('../data/testData.json')
const ValidUser = UserData.ValidUsers

fixture('Add Item to Shopping Cart Testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async t => {
        await LoginPage.sumbitLoginForm(ValidUser.username[0],ValidUser.password)
        await t.expect(InventoryPage.PageTitle.exists).ok()
    })

UserData.Inventory_Items.forEach( Item => {
    test(`Add Item by Label: ${Item.Name}`, async t => {
        await InventoryPage.AddItemToShoppingCart_ByLabel(InventoryPage.IIE_Label.withExactText(`${Item.Name}`))

        await t.expect(ShoppingCartPage.ItemsQty.innerText).eql('1')
        await t.expect(ShoppingCartPage.ItemName.innerText).eql(`${Item.Name}`)
        await t.expect(ShoppingCartPage.ItemDescription.innerText).eql(`${Item.Description}`)
        await t.expect(ShoppingCartPage.ItemPrice.innerText).eql(`${Item.Price}`)
    }) 
});

test('Add Multiple Items by Label', async t => {
    const Inventory_Items_Lenght = Object.keys(UserData.Inventory_Items).length

    for(let ItemsToVerify = 0; ItemsToVerify < Inventory_Items_Lenght; ItemsToVerify++){
        await InventoryPage.AddItemToShoppingCart_ByLabel(InventoryPage.IIE_Label.withExactText(UserData.Inventory_Items[ItemsToVerify].Name))
        for(let idx = 0; idx <= ItemsToVerify; idx++){
            const Expected_Name = Selector('.inventory_item_name').withExactText(`${UserData.Inventory_Items[idx].Name}`)
            await t.expect(Expected_Name.exists).ok()
        }
        await t.click(ShoppingCartPage.ContinueShoppingBtn)
    }
})