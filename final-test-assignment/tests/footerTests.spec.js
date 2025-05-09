import { test, expect } from '@playwright/test';
import { Footer } from '../pageObjects/footer';

test.describe('footer testing package', () => {

    test('footer social links should have correct attributes', async ({ page }) => {
        const footer = new Footer(page);
        await footer.navigate('https://www.reserved.com/pl/pl/');
        await footer.acceptCookies();
        for (let i = 0; i < Footer.socialLinks.length; i++) {
            await expect(footer.socialIconLinks.locator(`nth=${i}`)).toHaveAttribute('href', Footer.socialLinks[i]);
        }
    });

    test('store region can be changed', async ({ page }) => {
        const footer = new Footer(page);
        await footer.navigate('https://www.reserved.com/pl/pl/');
        await footer.acceptCookies();
        await footer.click(footer.regionSelection);
        await footer.click(footer.storeSelection);
        await footer.click(footer.firstRegion);
        await footer.click(footer.confirmRegionButton);
        await expect(page).toHaveURL('https://www.reserved.com/bg/bg/');
    });

    test('store region should remain the same when new region is selected but not confirmed', async ({ page }) => {
        const footer = new Footer(page);
        await footer.navigate('https://www.reserved.com/pl/pl/');
        await footer.acceptCookies();
        await footer.click(footer.regionSelection);
        await footer.click(footer.storeSelection);
        await footer.click(footer.firstRegion);
        await footer.click(footer.closeRegionContainer);
        await expect(page).toHaveURL('https://www.reserved.com/pl/pl/');
    });

    test('it is possible to get back to PL store from Global store', async ({ page }) => {
        const footer = new Footer(page);
        await footer.navigate('https://www.reserved.com/pl/pl/');
        await footer.acceptCookies();
        await footer.click(footer.regionSelection);
        await footer.click(footer.storeSelection);
        await footer.click(footer.globalStoreRegion);
        await footer.click(footer.confirmRegionButton);
        await footer.click(footer.regionSelection);
        await footer.click(footer.storeSelection);
        await footer.click(footer.polishRegion);
        await footer.click(footer.confirmRegionButton);
        await expect(page).toHaveURL('https://www.reserved.com/pl/pl/');
    });

    test('Accept of privacy policy and email are obligatory when user subscribes to newsletter from footer', async ({ page }) => {
        const footer = new Footer(page);
        await footer.navigate('https://www.reserved.com/pl/pl/');
        await footer.acceptCookies();
        await footer.click(footer.newsletterLink);
        await footer.click(footer.newsletterButton);
        await expect(page.locator("#newsletterMail-error")).toHaveText(/To pole jest wymagane/);
        await expect(page.locator("#newsletterTerms-error")).toHaveText(/Akceptacja regulaminu jest wymagana/);
        await expect(footer.newsletterButton).toHaveAttribute('disabled');
    });
});