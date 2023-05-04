import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given(/^I am on the Amazon page$/, () => {
    cy.visit('/')

});
When(/^I insert a search item$/, () => {
    cy.searchItem('ferrari')

});
When(/^I click search$/, () => {
    cy.clickSearchButton()
});