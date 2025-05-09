import { test, expect } from '@playwright/test';
import { MainPage } from '../pageObjects/mainPage';

test.describe('main page testing package', () => {

    test('main page contains news section', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://www.reserved.com/pl/pl/');
        await mainPage.acceptCookies();
        const today = new Date();
        const expectedSrc = `https://static.reserved.com/media/SHARED/stronywizerunkowe/reserved/homepage-new/images/reco/WOMEN/rec-newin-mobile-640x640px-L-${today.getDate().toString().padStart(2, "0")}${(today.getMonth() + 1).toString().padStart(2, "0")}.jpg?impolicy=banner`
        await expect(mainPage.newsPicture).toHaveAttribute('src', expectedSrc);
        await expect(mainPage.newsSection).toHaveText(/Nowości/);
        await expect(mainPage.newsButton).toHaveAttribute('href','https://www.reserved.com/pl/pl/kobieta/nowosci?brick=R_NEW_IN_W&place=home');
    })  
    
    test('privacy policy opens in separate window', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://www.reserved.com/pl/pl/');
        await mainPage.acceptCookies();
        const newTabPromise = page.waitForEvent("popup");
        await mainPage.click(mainPage.newsLetterPrivacyPolicyLink);
        const newTab = await newTabPromise;
        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL('https://www.reserved.com/pl/pl/privacy-policy');
    })
})