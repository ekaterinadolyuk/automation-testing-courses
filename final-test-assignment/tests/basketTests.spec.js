import { test, expect } from '@playwright/test';
import { Basket } from '../pageObjects/basket';

test.describe('basket testing package', () => {

    test('items can be added to the basket from the main page', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/');
        await basket.acceptCookies();
        await basket.click(basket.firstSliderProductItem);
        await basket.click(basket.productSizeM);
        await basket.click(basket.checkBasketButton);
        await expect(basket.basketItem).toHaveCount(1);
    });

    test('items can be removed from the basket added from the main page', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/');
        await basket.acceptCookies();
        await basket.click(basket.firstSliderProductItem);
        await basket.click(basket.productSizeM);
        await basket.click(basket.checkBasketButton);
        await basket.click(basket.deleteItem);
        await expect(page.locator('[data-dynamicyield="cart-heading"]')).toHaveText(/Twój koszyk jest pusty/);
    });

    test('several items can be added to the basket from page with beach collection', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/kobieta/kolekcja-plazowa');
        await basket.acceptCookies();
        await basket.click(basket.firstProductItemFromKolekcjaPlazowaPage);
        await basket.click(basket.firstProductSize);
        await page.waitForTimeout(3000);
        await basket.click(basket.closeButtonForItemFromKolekcjaPlazowaPage);
        await basket.click(basket.secondProductItemFromKolekcjaPlazowaPage);
        await basket.click(basket.firstProductSize);
        await basket.click(basket.checkBasketButton);
        await expect(basket.basketItem).toHaveCount(2);
    });

    test('error text should be shown when user tries to apply wrong discount code in the basket', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/kobieta/kolekcja-plazowa');
        await basket.acceptCookies();
        await basket.click(basket.firstProductItemFromKolekcjaPlazowaPage);
        await basket.click(basket.firstProductSize);
        await basket.click(basket.checkBasketButton);
        await basket.pressSequentially(basket.couponCodeField, 'uytu56572');
        await basket.click(basket.addCouponButton);
        await expect(basket.couponError).toHaveText('Kod kuponu uytu56572 jest niepoprawny');
    });

    test('delivery cost information is visible when clicking on delivery information link in the basket', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/kobieta/kolekcja-plazowa');
        await basket.acceptCookies();
        await basket.click(basket.firstProductItemFromKolekcjaPlazowaPage);
        await basket.click(basket.firstProductSize);
        await basket.click(basket.checkBasketButton);
        await basket.click(basket.deliveryCostInformationLink);
        await expect(basket.deliveryInformationPopUp).toBeVisible();
        await expect(basket.deliveryInformationPopUp).toHaveText(/Czas i koszt dostawy/);
    });

    test('button for making an order in the basket leads to the page with asking to login for not logged in users', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/kobieta/kolekcja-plazowa');
        await basket.acceptCookies();
        await basket.click(basket.firstProductItemFromKolekcjaPlazowaPage);
        await basket.click(basket.firstProductSize);
        await basket.click(basket.checkBasketButton);
        await basket.click(basket.makeAnOrderButton);
        await expect(basket.usernameField).toBeVisible();
        await expect(basket.passwordField).toBeVisible();
    });

    test('product items are not deleted from basket if user gets back to ', async ({ page }) => {
        const basket = new Basket(page);
        await basket.navigate('https://www.reserved.com/pl/pl/kobieta/kolekcja-plazowa');
        await basket.acceptCookies();
        await basket.click(basket.firstProductItemFromKolekcjaPlazowaPage);
        await basket.click(basket.firstProductSize);
        await basket.click(basket.checkBasketButton);
        await basket.click(basket.makeAnOrderButton);
        await basket.goBack();
        await expect(page).toHaveURL('https://www.reserved.com/pl/pl/checkout/cart/');
        await expect(basket.basketItem).toHaveCount(1);
    });
})