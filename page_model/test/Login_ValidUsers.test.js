import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

const userData = require('../data/testData.json')

fixture('Login with Valid Usernames provided by the Website')
    .page `https://www.saucedemo.com/`
  
userData.ValidUsers.username.forEach(username => {
    test(`Login - Valid Username: ${username}`, async t =>{
        await LoginPage.sumbitLoginForm(username, userData.ValidUsers.password)
        await t.expect(InventoryPage.PageTitle.textContent).contains('Products');
    })
})
