import { MainPage } from '../page-objects/mainPage';
import { TextBox } from '../page-objects/text-box';
import { WebTables } from '../page-objects/web-tables';

Cypress.on('uncaught:exception', () => {
    return false
})

describe('tests for DemoQA website', () => {
    it('all category cards should have icons and text', () => {
        const mainPage = new MainPage();
        mainPage.navigation('https://demoqa.com/');
        mainPage.headings.should('not.be.empty');
        mainPage.icons.should('be.visible');
        mainPage.headings.should('have.length', 6);
        mainPage.icons.should('have.length', 6);
    })

    for(let i = 0; i < 6; i++) {
        it(i + ' category card should navigate to proper page', () => {
            const mainPage = new MainPage();
            mainPage.navigation('https://demoqa.com/');
            mainPage.clickAt(i);
            cy.url().should('eq', MainPage.cardLinks[i]);
        })
    }

    it('should fill the Text Box with correct data', () => {
        const textBox = new TextBox();
        textBox.navigation('https://demoqa.com/text-box');
        textBox.fullNameField.type('TatsianaBulykhina');
        textBox.emailField.type('test@test.com');
        textBox.currentAddressField.type('Warsaw, Poland 1');
        textBox.permanentAddressField.type('Warsaw, Poland 2');
        textBox.click();
        textBox.fullNameOutput.contains('Name:TatsianaBulykhina');
        textBox.emailOutput.contains('Email:test@test.com');
        textBox.currentAddressOutput.contains('Current Address :Warsaw, Poland 1');
        textBox.permanentAddressOutput.contains('Permananet Address :Warsaw, Poland 2');
    })

    it('text box should be submitted when wrong email format is entered', () => {
        const textBox = new TextBox();
        textBox.navigation('https://demoqa.com/text-box');
        textBox.fullNameField.type('TatsianaBulykhina');
        textBox.emailField.type('test');
        textBox.currentAddressField.type('Minsk,Belarus 1');
        textBox.permanentAddressField.type('Minsk,Belarus 2');
        textBox.click();
        cy.get('#output').find('p').should('have.length', 0);
    })

    it('should not allow to save record with blank fields', () => {
        const webTables = new WebTables();
        webTables.navigation('https://demoqa.com/webtables');
        webTables.click();
        webTables.clickSubmit();
        cy.get('.modal-content').should('be.visible');
        webTables.webTableForm.find('input:invalid').should('have.length', 6);
    })

    const tableTestingData = [
        {
            firstName: 'Tatsiana',
            lastName: 'Bulykhina',
            email: 'test@test.com',
            age: '34',
            salary: '5000',
            department: 'Marketing'
        }
    ]

    for (let i = 0; i < tableTestingData.length; i++) {
        it('new record should be added to webtable', () => {
            const webTables = new WebTables();
            webTables.navigation('https://demoqa.com/webtables');
            webTables.click();
            webTables.firstNameField.type(tableTestingData[i].firstName);
            webTables.lastNameField.type(tableTestingData[i].lastName);
            webTables.userEmailField.type(tableTestingData[i].email);
            webTables.userAgeField.type(tableTestingData[i].age);
            webTables.userSalaryField.type(tableTestingData[i].salary);
            webTables.userDepartmentField.type(tableTestingData[i].department);
            webTables.clickSubmit();
            webTables.lastTableRow
                .should('contain', tableTestingData[i].firstName)
                .should('contain', tableTestingData[i].lastName)
                .and('contain', tableTestingData[i].email)
                .and('contain', tableTestingData[i].age)
                .and('contain', tableTestingData[i].salary)
                .and('contain', tableTestingData[i].department);
        })
    }

    it('should delete all records in table', () => {
        const webTables = new WebTables();
        webTables.navigation('https://demoqa.com/webtables');
        webTables.deleteAllItems();
        cy.get('.rt-noData').should('contain.text', 'No rows found');
    })

    it('should change record\'s salary in the table', () => {
        const webTables = new WebTables();
        webTables.navigation('https://demoqa.com/webtables');
        webTables.changeItem('50000');
        cy.get('.rt-tbody .rt-tr').first().get('.rt-td').eq(4).should('contain.text', '50000');
    })

    it('should search record according to search input', () => {
        const webTables = new WebTables();
        webTables.navigation('https://demoqa.com/webtables');
        webTables.searchInput.type('Can');
        cy.get('.rt-tbody .rt-tr').first().should('include.text', 'Can')
    })

    it('should minimize table to size 5', () => {
        const webTables = new WebTables();
        webTables.navigation('https://demoqa.com/webtables');
        webTables.clickOnRow();
        cy.get('.rt-table .rt-tbody .rt-tr').should('have.length', 5)
    })
})