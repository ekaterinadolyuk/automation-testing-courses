import {Base} from './base';

class DocsPage extends Base {

    get firstYarnItem() {
        return '//div[@class="tabs-container tabList__CuJ"][1]//ul//li[normalize-space(text())="yarn"]';
    }
    
    async clickOnFirstYarnItem() {
        const locator = await this.page.locator(this.firstYarnItem);
        return await this.click(locator);
    }

    get gettingStartedAccordion() {
        return '//a[@class="menu__link menu__link--sublist menu__link--sublist-caret menu__link--active"]';
    }

    async clickOnGettingStartedAccordion() {
        const locator = await this.page.locator(this.gettingStartedAccordion);
        return await this.click(locator);
    }
    

}

export { DocsPage };