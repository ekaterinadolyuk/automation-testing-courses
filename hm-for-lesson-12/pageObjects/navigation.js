import {Base} from './base';

class Navigation extends Base {
    get switchButton() {
        return '.colorModeToggle_DEke .toggleButton_gllP';
    }

    get searchButton() {
        return '.DocSearch-Button';
    }

    get searchInput() {
        return '.DocSearch-Input';
    }

    get takeSearchResult() {
        return '.DocSearch-Hit[aria-selected="true"]';
    }
    
    get languageMenuButton() {
        return '//a[@href="#"]';
    }

    getLanguageMenuItem(itemName) {
        const languageMenuItem = {
            nodeJS: '//a[@href="/"]',
            python: '//a[@href="/python/"]',
            java: '//a[@href="/java/"]',
            dotnet: '//a[@href="/dotnet/"]'
        }
        return languageMenuItem[itemName];
    }

    async clickOnSearchButton() {
        const locator = await this.page.locator(this.searchButton);
        await this.click(locator);
    }

    async clickOnSwitchButton() {
        const locator = await this.page.locator(this.switchButton);
        return await this.click(locator);
    }

    async clickOnLanguageMenuButton() {
        const locator = await this.page.locator(this.languageMenuButton);
        await locator.hover();
        const secondLocator = await this.page.locator(this.getLanguageMenuItem('python'));
        return await this.click(secondLocator);
    }

    async pressButton(locator) {
        return locator.press("Enter");
    }

    async waitFor(locator) {
        return locator.waitFor();
    }

    async pressSequentially(locator, text) {
        return locator.pressSequentially(text);
    }

    async findNeededResult() {
        const locator = await this.page.locator(this.searchButton);
        await this.click(locator);
        const secondLocator = await this.page.locator(this.searchInput);
        await this.waitFor(secondLocator);
        await this.pressSequentially(secondLocator,'api testing');
        const thirdLocator = await this.page.locator(this.takeSearchResult);
        await this.waitFor(thirdLocator);
        await this.pressButton(thirdLocator);
    }
}

export { Navigation };