/// <reference types="cypress" />
const el = require('./elements').ELEMENTS

class Login {
  accessLoginPage() {
    cy.visit('/login');

  }
  fillFormCredentials() {
    cy.get(el.inputEmail).type(Cypress.config().user.email);
    cy.get(el.inputPassword).type(Cypress.config().user.password);

  }
  submitLogin() {
    cy.get(el.buttonSubmit).click();

  }


} export default new Login();