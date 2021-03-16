import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

const userData = require('../data/testData.json')

fixture('Logout Testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async t => {
        await LoginPage.sumbitLoginForm(userData.ValidUsers.username[0],userData.ValidUsers.password)
        await t.expect(InventoryPage.PageTitle.textContent).contains('Products');
    })

    test('Logout', async t =>{
        await InventoryPage.NavigateToLogout()
        await t.expect(LoginPage.loginButton.exists).ok()
    })