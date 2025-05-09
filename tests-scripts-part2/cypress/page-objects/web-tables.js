import { Base } from './base.js';

class WebTables extends Base {
    get addNewRecordButton() {
        return cy.get('#addNewRecordButton');
    }

    click() {
        this.addNewRecordButton.click();
    }

    get webTableForm() {
        return cy.get('#userForm');
    }

    get firstNameField() {
        return this.webTableForm.find('#firstName');
    }

    get lastNameField() {
        return this.webTableForm.find('#lastName');
    }

    get userEmailField() {
        return this.webTableForm.find('#userEmail');
    }

    get userAgeField() {
        return this.webTableForm.find('#age');
    }

    get userSalaryField() {
        return this.webTableForm.find('#salary');
    }

    get userDepartmentField() {
        return this.webTableForm.find('#department');
    }

    get lastTableRow() {
        return cy.get('.rt-table .rt-tr-group .rt-tr:last-child');
    }

    clickSubmit() {
        cy.get('#submit').click()
    }

    deleteAllItems() {
        cy.get('[id^="delete-record-"]').then(elements => {
            for (let i = 0; i < elements.length; i++) {
                cy.get('[id^="delete-record-"]').first().click();
            }
        });
    }

    changeItem(salary) {
        cy.get('[id^="edit-record-"]').first().click();
        this.userSalaryField.clear().type(salary);
        this.clickSubmit();
    }

    get searchInput() {
        return cy.get('.input-group input');
    }

    get shownRowsSelector() {
        return cy.get('[aria-label="rows per page"]')
    }

    clickOnRow() {
        this.shownRowsSelector.select("5");
    }
}
export { WebTables };