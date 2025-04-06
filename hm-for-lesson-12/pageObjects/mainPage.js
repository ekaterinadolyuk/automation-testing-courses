import {Base} from './base';

class MainPage extends Base {

    get startButton() {
        return '//a[contains(@class,"getStarted_Sjon")]';
    }
    
    async clickOnStartButton() {
        const locator = await this.page.locator(this.startButton);
        return await this.click(locator);
    }

    get specificText() {
        return '//*[@class="row"]//*[@class="col col--6"]//h3[contains(text(), "Full isolation • Fast execution")]';
    }

    async searchSomeText() {
        return await this.page.locator(this.specificText);
    }
}

export { MainPage };