import { Selector } from 'testcafe'

class Checkout_InformationPage{
    constructor(){
        this.FirstName_TextBox  = Selector('#first-name.form_input')
        this.LastName_TextBox   = Selector('#last-name.form_input')
        this.ZipCode_TextBox    = Selector('#postal-code.form_input')
        this.Continue_Button    = Selector('.btn_primary.cart_button')
        this.Error_Message      = Selector('h3[data-test="error"]')
        this.Overview_Title     = Selector('.subheader')
        this.Cancel_Button      = Selector('.cart_cancel_link.btn_secondary')
        this.Finish_Button      = Selector('.btn_action.cart_button').withExactText('FINISH')
    }
}

export default new Checkout_InformationPage()