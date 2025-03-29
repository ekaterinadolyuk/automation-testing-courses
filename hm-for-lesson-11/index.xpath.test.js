const { test, expect } = require('playwright/test');

test('search for 1st element (search button)', async ({ page }) => {
    await page.goto('https://www.bbc.com/');
    //xpath: const element = page.locator('//button[@aria-label="Search BBC"]');
    const element = page.locator('button[aria-label^="Search BBC"]');

    await expect(element).toBeVisible();
})

test('search for 2d element (navigation)', async ({ page }) => {
    await page.goto('https://www.bbc.com/');
    //xpath: const element = page.locator('//nav[@class="sc-f116bf72-1 xECcw"]');
    const element = page.locator('nav.sc-f116bf72-1');

    await expect(element).toBeVisible();
})

test('search for 3d element (time)', async ({ page }) => {
    await page.goto('https://www.bbc.com/');
    //xpath: const element = page.locator('//*[@data-testid="first-grid"]//*[@class="sc-530fb3d6-1 QTNSr"]//*[@data-testid="card-metadata-lastupdated"]');
    const element = page.locator('[data-testid="first-grid"]>div:first-child[data-testid="dundee-card"] span[data-testid^=card-metadata-lastupdated]');
    
    await expect(element).toBeVisible();
})

test('search for 4th element (main image)', async ({ page }) => {
    await page.goto('https://www.bbc.com/');
    //xpath: const element = page.locator('//div[contains(@class,"ejINiH")]');
    const element = page.locator('div.ejINiH');
    
    await expect(element).toBeVisible();
})

test('search for 6th element (time)', async ({ page }) => {
    await page.goto('https://www.bbc.com/');
    //xpath: const element = page.locator('//*[@data-testid="second-grid"]/child::div[1]//div[contains(@class,"sc-6fba5bd4-0")]/span[contains(@class,"sc-6fba5bd4-1")]');
    const element = page.locator('section[data-testid="vermont-section-outer"] div[data-testid="vermont-section"] div[data-testid="second-grid"]>div:first-child[data-testid="manchester-card"] div[data-testid="manchester-article"] div[data-testid="card-text-wrapper"] div.sc-6fba5bd4-0>span[data-testid="card-metadata-lastupdated"]');
    
    await expect(element).toBeVisible();
})

test('search for 7th element (last article in wrapper)', async ({ page }) => {
    await page.goto('https://www.bbc.com/');
    const element = page.locator('//section[@data-testid="vermont-section-outer"]//div[@data-testid="vermont-section"]//div[@data-testid="second-grid"]/div[@data-testid="manchester-card"][last()]');
    //const element = page.locator('section[data-testid="vermont-section-outer"] div[data-testid="vermont-section"] div[data-testid="second-grid"] div:last-child[data-testid="manchester-card"]');
    
    await expect(element).toBeVisible();
})