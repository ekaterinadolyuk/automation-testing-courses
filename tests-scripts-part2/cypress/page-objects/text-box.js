import { Base } from './base.js';

class TextBox extends Base {
    get form() {
        return cy.get('#userForm');
    }

    get fullNameField() {
        return this.form.find('#userName');
    }

    get emailField() {
        return this.form.find('#userEmail');
    }

    get currentAddressField() {
        return this.form.find('#currentAddress');
    }

    get permanentAddressField() {
        return this.form.find('#permanentAddress');
    }

    get output() {
        return cy.get('#output');
    }

    get fullNameOutput() {
        return this.output.find("#name");
    }

    get emailOutput() {
        return this.output.find("#email");
    }

    get currentAddressOutput() {
        return this.output.find("#currentAddress");
    }

    get permanentAddressOutput() {
        return this.output.find("#permanentAddress");
    }

    click() {
        cy.get('#submit').click()
    }
}

export { TextBox };