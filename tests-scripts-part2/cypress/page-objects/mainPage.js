import { Base } from './base.js';

class MainPage extends Base {
    static cardLinks = [
        "https://demoqa.com/elements",
        "https://demoqa.com/forms",
        "https://demoqa.com/alertsWindows",
        "https://demoqa.com/widgets",
        "https://demoqa.com/interaction",
        "https://demoqa.com/books"
    ]

    get icons() {
        return cy.get('.category-cards svg');
    }

    get headings() {
        return cy.get('.category-cards h5');;
    }

    clickAt(cardIndex) {
        cy.get('.category-cards .card').eq(cardIndex).click();
    }
}

export { MainPage };