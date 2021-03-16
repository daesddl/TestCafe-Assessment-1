import { Selector, t } from 'testcafe'

class InventoryPage{
    constructor(){
        this.PageTitle              = Selector('.product_label')
        this.BurgerMenu             = Selector('#react-burger-menu-btn')
        this.LogoutLink             = Selector('#logout_sidebar_link')
        this.ShoppingCartLink       = Selector('.shopping_cart_link.fa-layers.fa-fw')
        this.InventoryItemElements  = Selector('div .inventory_item')
        this.IIE_Label              = Selector('.inventory_item_name')
        this.IIE_Btn                = Selector('.btn_primary.btn_inventory').withExactText('ADD TO CART')
        this.InventoryDetailsBackBtn= Selector('.inventory_details_back_button')
    }

    async NavigateToLogout(){
        await t.click(this.BurgerMenu)
        await t.click(this.LogoutLink)
    }

    async NavigateToShoppingCart(){
        await t.click(this.ShoppingCartLink)
    }

    async AddItemToShoppingCart_ByLabel(item){
        await t.click(item)
        await t.click(this.IIE_Btn)
        await t.click(this.ShoppingCartLink)
    }
}

export default new InventoryPage()