class Base {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        return this.page.goto(url);
    }

    async insertSomeText(text) {
        return this.page.pressSequentially(text);
    }

    async click(locator) {
        await locator.click();
        return locator;
    }
}

export { Base };