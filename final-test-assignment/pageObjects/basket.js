import { Base } from './base';

class Basket extends Base {
    get firstSliderProductItem() {
        return this.page.locator('.product-slide .quick-shop qs-action-icon').locator('nth=0').locator('button[data-testid="quick-shop"]');
    }

    get productSizeM() {
        return this.page.locator("#quick-shop-re-homepage").locator("button[data-testid='quick-shop-size']").locator("//*[contains(text(),'M')]");
    }

    get checkBasketButton() {
        return this.page.locator("button .qs_button-text-container .qs_text-l");
    }

    get basketItem() {
        return this.page.locator(".product-view__Wrapper-uchf1p-0 .styled__Wrapper-sc-1ynnjja-0 [data-selen-group='product']");
    }

    get deleteItem() {
        return this.page.locator("//*[contains(text(),'Usuń')]");
    }

    get firstProductItemFromKolekcjaPlazowaPage() {
        return this.page.locator('.es-product').locator('nth=0').locator('.qs-action-icon__container');
    }

    get firstProductSize() {
        return this.page.locator(".qs-modal__content [data-testid='quick-shop-size']").locator('nth=0');
    }

    get closeButtonForItemFromKolekcjaPlazowaPage() {
        return this.page.locator("[data-testid='quick-shop-close']");
    }

    get secondProductItemFromKolekcjaPlazowaPage() {
        return this.page.locator('.es-product').locator('nth=1').locator('.qs-action-icon__container');
    }

    get couponCodeField() {
        return this.page.locator('#couponCode');
    }

    get addCouponButton() {
        return this.page.locator('[data-selen="add-coupon-code"]');
    }

    get couponError() {
        return this.page.locator('.coupon-code__Error-sc-1morxn3-3');
    }

    get deliveryCostInformationLink() {
        return this.page.locator('.free-shipping-info__Button-sc-3awnh-4');
    }

    get deliveryInformationPopUp(){
        return this.page.locator('.modal-dialog');
    }

    get makeAnOrderButton() {
        return this.page.locator('[data-selen="order-link"]');
    }

    get usernameField() {
        return this.page.locator('[id*=username]');
    }

    get passwordField() {
        return this.page.locator('[id*=password]');
    }
}

export { Basket }