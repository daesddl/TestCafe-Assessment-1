import LoginPage from '../pages/LoginPage'

const userData = require('../data/testData.json')

fixture('Login Invalid Users Testing')
    .page `https://www.saucedemo.com/`
  
userData.InvalidUsers.forEach(user => {
    test(`Login - ${user.note}`, async t => {
        await LoginPage.sumbitLoginForm(user.username, user.password)
        await t.expect(LoginPage.errorMessage.exists).ok()
        await t.expect(LoginPage.errorMessage.innerText).eql(user.error)
    })
})
