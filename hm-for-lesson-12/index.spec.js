import { test, expect } from '@playwright/test';
import { Navigation } from './pageObjects/navigation';
import { MainPage } from './pageObjects/mainPage';
import { DocsPage } from './pageObjects/docsPage';
import { Footer } from './pageObjects/footer';

test.describe('Playwright test package', () => {

  test('switch to website dark mode', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.navigate('https://playwright.dev/');
    const switchButton = await navigation.clickOnSwitchButton();
    await expect(switchButton).toHaveAttribute("title", "Switch between dark and light mode (currently dark mode)");
  });

  test('choose yarn for playwright installation', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://playwright.dev/');
    await mainPage.clickOnStartButton();
    const docsPage = new DocsPage(page);
    const yarnTab = await docsPage.clickOnFirstYarnItem();
    await expect(yarnTab).toHaveClass(/tabs__item--active/);
  });

  test('when choosing python language in drop down menue, playwright page for python should be opened', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.navigate('https://playwright.dev/');
    await navigation.clickOnLanguageMenuButton();
    await expect(page).toHaveURL('https://playwright.dev/python/');
  });

  test('should find api page through search field', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.navigate('https://playwright.dev/');
    await navigation.findNeededResult();
    await expect(page).toHaveURL('https://playwright.dev/docs/api-testing');
  });

  test('text \'Full isolation • Fast execution\' present on the page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://playwright.dev/');
    const result = await mainPage.searchSomeText();
    await expect(result).toBeVisible();
  })

  test('Getting started accordion on Docs page should collapse when clicking on it', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://playwright.dev/');
    await mainPage.clickOnStartButton();
    const docsPage = new DocsPage(page);
    const gettingStartedAccordion = await docsPage.clickOnGettingStartedAccordion();
    const parent = page.locator('li.menu__list-item', { has: gettingStartedAccordion })
    await expect(parent).toHaveClass(/menu__list-item--collapsed/);
  })

  test('should open Ambassadors page from footer', async ({ page }) => {
    const footer = new Footer(page);
    await footer.navigate('https://playwright.dev/');
    await footer.clickOnAmbassadorsFooterlink()
    await expect(page).toHaveURL('https://playwright.dev/community/ambassadors');
  })
})
