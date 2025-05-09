import { Base } from './base';

class Footer extends Base {
    get socialIcons() {
        return this.page.locator('//*[@class="Desktop-module__social-icons_UNqQlW0870"]');
    }

    get socialIconLinks() {
        return this.socialIcons.locator('//a');
    }

    static socialLinks = [
        "https://www.facebook.com/ReservedPL",
        "https://www.youtube.com/user/reservedTV",
        "https://www.instagram.com/reserved/",
        "https://www.pinterest.com/reservedcom/"
    ]

    get regionSelection() {
        return this.page.locator(".Desktop-module__wrapper_UNqQlW0870 .ds-text-variant__paragraph");
    }

    get storeSelection() {
        return this.page.locator("[data-testid='storeselector-list']");
    }

    get regionContainer() {
        return this.page.locator('//*[@data-testid="storeselector-container"]');
    }

    get firstRegion() {
        return this.page.locator('.liststyled__StoreSelectorListContainer-sc-1wf94u4-0 .liststyled__StoreSelectorListItem-sc-1wf94u4-1:first-of-type')
    }

    get confirmRegionButton() {
        return this.page.locator('//*[@data-testid="storeselector-submit"]');
    }

    get closeRegionContainer() {
        return this.page.locator('.drawer-headerstyled__ReservedStoreSelectorClosedIcon-sc-8bm2iz-2');
    }

    get globalStoreRegion() {
        return this.regionContainer.locator("//*[contains(text(),'Global store')]");
    }

    get polishRegion() {
        return this.page.locator("//*[contains(@class, 'liststyled__StoreSelectorListContainer-sc-1wf94u4-0')]//*[contains(text(),'Polska (Poland)')]");
    }

    get newsletterLink() {
        return this.page.locator('//*[@href="/pl/pl/newsletter"]');
    }

    get newsletterButton() {
        return this.page.locator('#newsletterSubmitButton')
    }
}

export { Footer }