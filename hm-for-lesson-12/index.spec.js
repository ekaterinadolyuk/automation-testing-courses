import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test.describe('Playwright test package', () => {

  test('switch to website dark mode', async ({ page }) => {
    const locator = page.locator('.colorModeToggle_DEke .toggleButton_gllP');
    await locator.click();
    await expect(locator).toHaveAttribute("title", "Switch between dark and light mode (currently dark mode)");
  });

  test('choose yarn for playwright installation', async ({ page }) => {
    await page.click('//a[contains(@class,"getStarted_Sjon")]');
    const yarnTab = page.locator('//div[@class="tabs-container tabList__CuJ"][1]//ul//li[normalize-space(text())="yarn"]');
    await yarnTab.click();
    await expect(yarnTab).toHaveClass(/tabs__item--active/);
  });

  test('when choosing python language in drop down menue, playwright page for python should be opened', async ({ page }) => {
    const languageMenu = page.locator('//a[@href="#"]');
    await languageMenu.hover();
    const pythonLink = page.locator('//a[@href="/python/"]');
    await pythonLink.click();
    await expect(page).toHaveURL('https://playwright.dev/python/');
  });

  test('should find api page through search field', async ({ page }) => {
    const searchLocator = page.locator('.DocSearch-Button');
    await searchLocator.click();
    const inputText = page.locator('.DocSearch-Input');
    await inputText.waitFor();
    await inputText.pressSequentially('api testing');
    const firstResult = page.locator('.DocSearch-Hit[aria-selected="true"]');
    await firstResult.waitFor();
    await inputText.press("Enter");
    await expect(page).toHaveURL('https://playwright.dev/docs/api-testing');
  });
})
