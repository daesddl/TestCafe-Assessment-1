import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'

const UserData = require('../data/testData.json')

fixture('Navigate to Shopping Cart Page Testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async t => {
        await LoginPage.sumbitLoginForm(UserData.ValidUsers.username[0], UserData.ValidUsers.password)
        await t.expect(InventoryPage.PageTitle.exists).ok()
    })

test('Navigate to Shopping Cart', async t => {
    await InventoryPage.NavigateToShoppingCart()
    await t.expect(ShoppingCartPage.YourCartTitle.exists).ok()    
})
