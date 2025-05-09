import { Base } from './base';

class MainPage extends Base {
    get newsSection() {
        return this.page.locator('.category-box.active .banner-box')
    }

    get newsPicture() {
        return this.page.locator('.category-box.active .banner-box .banner-picture-box img')
    }

    get newsButton() {
        return this.page.locator('.category-box.active .banner-btn-box')
    }

    get newsLetterPrivacyPolicyLink() {
        return this.page.locator('#newsletter-terms-text [href="https://www.reserved.com/pl/pl/privacy-policy"]');
    }
}

export { MainPage }