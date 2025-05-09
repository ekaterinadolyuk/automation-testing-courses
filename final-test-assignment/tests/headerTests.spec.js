import { test, expect } from '@playwright/test';
import { Header } from '../pageObjects/header';

test.describe('header testing package', () => {

  test('menue items should open proper pages', async ({ page }) => {
    const header = new Header(page);
    await header.navigate('https://www.reserved.com/pl/pl/');
    await header.acceptCookies();
    await header.clickOnMenuItem('kobieta');
    await expect(page).toHaveURL('https://www.reserved.com/pl/pl/kobieta');
    await header.clickOnMenuItem('mezczyzna');
    await expect(page).toHaveURL('https://www.reserved.com/pl/pl/mezczyzna');
    await header.clickOnMenuItem('dziewczynka');
    await expect(page).toHaveURL('https://www.reserved.com/pl/pl/dziewczynka');
    await header.clickOnMenuItem('chlopiec');
    await expect(page).toHaveURL('https://www.reserved.com/pl/pl/chlopiec');
    await header.clickOnMenuItem('dlaCiebie');
    await expect(page).toHaveURL('https://www.reserved.com/pl/pl/for-you-page');
  });

  test('search bar should show page with existing content', async ({ page }) => {
    const header = new Header(page);
    await header.navigate('https://www.reserved.com/pl/pl/');
    await header.acceptCookies();
    await header.click(header.searchBar);
    await header.pressSequentially(header.searchBar, 'sukienka');
    await header.pressButton(header.searchBar);
    await expect(header.resultTitle).toHaveText('sukienka');
  });

  test('search bar can be cleared', async ({ page }) => {
    const header = new Header(page);
    await header.navigate('https://www.reserved.com/pl/pl/');
    await header.acceptCookies();
    await header.click(header.searchBar);
    await header.pressSequentially(header.searchBar, 'dziewczynka');
    await header.pressButton(header.searchBar);
    await header.click(header.clearWord);
    await expect(page.locator('//input[@data-testid="search-input"]')).toHaveValue('');
    await expect(header.lastSearchResult).toHaveText('dziewczynka');
  });

  test('search history should be cleared', async ({ page }) => {
    const header = new Header(page);
    await header.navigate('https://www.reserved.com/pl/pl/');
    await header.acceptCookies();

    await header.click(header.searchBar);
    for (let i = 0; i < Header.suggestions.length; i++) {
      await header.pressSequentially(header.searchBar, Header.suggestions[i]);
      await header.pressButton(header.searchBar);
      await page.waitForTimeout(300);
      await header.click(header.clearWord);
    }

    for (let i = 0; i < Header.suggestions.length; i++) {
      await header.clearSearchHistory(Header.suggestions[i]);
    }

    const closeButtons = page.locator('.ds-icon.outline-close.ds-icon-size__s');
    await expect(closeButtons).toHaveCount(0);
  });

  test('check discount banner content', async ({ page }) => {
    const header = new Header(page);
    await header.navigate('https://www.reserved.com/pl/pl/');
    await header.acceptCookies();
    await expect(header.discountBanner).toBeVisible();
    
    for (let i = 0; i < Header.bannerLinks.length; i++) {
      await expect(header.discountBannerLinks.locator(`nth=${i}`)).toHaveAttribute('href', new RegExp(Header.bannerLinks[i]));
    }    
  });

  test('clicking on logo should lead to main page', async ({ page }) => {
    const header = new Header(page);
    await header.navigate('https://www.reserved.com/pl/pl/dziewczynka');
    await header.acceptCookies();
    await header.click(header.headerLogo);
    await expect(page).toHaveURL('https://www.reserved.com/pl/pl/');
  });
})