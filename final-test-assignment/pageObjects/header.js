import { Base } from './base';

class Header extends Base {
    get kobietaMenueItem() {
        return this.page.locator('//*[@href="https://www.reserved.com/pl/pl/kobieta"]');
    }

    get mezczyznaMenueItem() {
        return this.page.locator('//*[@href="https://www.reserved.com/pl/pl/mezczyzna"]');
    }

    get dziewczynkaMenueItem() {
        return this.page.locator('//*[@href="https://www.reserved.com/pl/pl/dziewczynka"]');
    }

    get chlopiecMenueItem() {
        return this.page.locator('//*[@href="https://www.reserved.com/pl/pl/chlopiec"]');
    }

    get dlaCiebieMenueItem() {
        return this.page.locator('//*[@href="https://reserved.com/pl/pl/for-you-page"]');
    }

    async clickOnMenuItem(menuName) {
        const menuMap = {
            kobieta: this.kobietaMenueItem,
            mezczyzna: this.mezczyznaMenueItem,
            dziewczynka: this.dziewczynkaMenueItem,
            chlopiec: this.chlopiecMenueItem,
            dlaCiebie: this.dlaCiebieMenueItem
        };

        const locator = menuMap[menuName];
        await locator.click();
    }

    static suggestions = [
        'dziewczynka',
        'chłopak',
        'sukienka'
    ];

    get searchBar() {
        return this.page.locator('//*[@data-testid="search-header"]');
    }

    get clearWord() {
        return this.page.locator('//*[@class="ds-input-field-cursor-pointer"]');
    }

    get lastSearchResult() {
        return this.page.locator('(//*[@class="LastSearchedPhrases-module__chip"])[1]')
    }

    async clearSearchHistory(searchText) {
        const icon = this.page.locator(`//*[@id="algolia-last-searched-phrases"]//*[contains(text(),'${searchText}')]//following-sibling::div//span`);
        await this.click(icon);
    }
    static bannerLinks = [
        "https://www.reserved.com/pl/pl/kobieta/",
        "https://www.reserved.com/pl/pl/mezczyzna/",
        "https://www.reserved.com/pl/pl/dziewczynka/",
        "https://www.reserved.com/pl/pl/chlopiec/"
    ]

    get discountBanner() {
        return this.page.locator('//*[@id="PromoBar"]');
    }

    get discountBannerLinks() {
        return this.discountBanner.locator('//a');
    }
    get headerLogo() {
        return this.page.locator('.ds-logo');
    }
}

export { Header }