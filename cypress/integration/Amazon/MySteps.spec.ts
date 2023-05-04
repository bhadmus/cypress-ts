import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given(/^I am on the Amazon page$/, () => {
    cy.visit('/')
    // cy.request('https://www.virginmedia.com/dpb/routes.json').then((resp) => {
    //     cy.log(resp.body)
    //     var jsonData = JSON.stringify(resp.body)
    //     cy.log(typeof (jsonData))
    //     cy.writeFile("cypress/fixtures/routes.json", jsonData)
    //     cy.fixture("routes").then((routes) => {
    //         for (var i = 0; i < routes.length; i++) {
    //             cy.visit('/' + routes)
    //             let firstTitle = 'title';
    //             let firstHeader = 'h1';
    //             let body = 'body';
    //             let footer = "#footer";
    //
    //             cy.get(firstTitle, { timeout: 30000 }).should('exist');
    //             cy.get(firstHeader, { timeout: 30000 }).should('exist');
    //             cy.get(body, { timeout: 30000 }).should('exist');
    //             cy.get(footer, { timeout: 30000 }).should('exist');
    //             cy.get(firstTitle).should('not.contains.text', 'message');
    //
    //             // cy.window().then((win) => {
    //             //     expect(win.console.error).to.have.callCount(0);
    //             //     //expect(win.console.warn).to.have.callCount(0);
    //             // })
    //         }
    //
    //     })
    //
    // })

});
When(/^I insert a search item$/, () => {
    cy.searchItem('ferrari')

});
When(/^I click search$/, () => {
    cy.clickSearchButton()
});