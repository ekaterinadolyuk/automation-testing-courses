class Base {
    constructor(page) {
        this.page = page;
    }

    async acceptCookies() {
        await this.page.waitForTimeout(3000);
        if (await this.page.locator('//*[@id="cookiebotDialogOkButton"]').isVisible()) {
            await this.page.click('//*[@id="cookiebotDialogOkButton"]', { force: true } );
        }
    }

    async navigate(url) {
        return await this.page.goto(url);
    }

    async pressSequentially(locator, text) {
        return await locator.pressSequentially(text, { delay: 200 });
    }

    async click(locator) {
        await this.page.waitForTimeout(500);
        await locator.click();
        return locator;
    }

    async pressButton(locator) {
        return await locator.press("Enter");
    }

    get resultTitle() {
        return this.page.locator('//*[@data-testid="products-results"]//h1');
    }

    async goBack() {
        await await this.page.goBack();
    }
}

export { Base };