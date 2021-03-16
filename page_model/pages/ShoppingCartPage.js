import { Selector } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.YourCartTitle          = Selector('.subheader').withExactText('Your Cart')
        this.ItemsQty               = Selector('.cart_quantity')
        this.ItemName               = Selector('.inventory_item_name')
        this.ItemDescription        = Selector('.inventory_item_desc')
        this.ItemPrice              = Selector('.inventory_item_price')
        this.ContinueShoppingBtn    = Selector('.cart_footer').child('.btn_secondary')
        this.CheckOutBtn            = Selector('.btn_action.checkout_button')
    }
}

export default new ShoppingCartPage()