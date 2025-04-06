import {Base} from './base';

class Footer extends Base {
    get ambassadorsFooterlink() {
        return '//a[@href="/community/ambassadors"]';
    }

    async clickOnAmbassadorsFooterlink() {
        const locator = await this.page.locator(this.ambassadorsFooterlink);
        await this.click(locator);
    }
}

export { Footer };