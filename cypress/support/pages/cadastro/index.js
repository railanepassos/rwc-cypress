/// <reference types="cypress" />
let faker = require('faker')
const el = require('./elements').ELEMENTS

class Cadastro {
  accessRegisterPage() {
    cy.visit('/register')

  }
  fillFormRegister() {
    cy.get(el.inputUsername)
      .type(faker.name.firstName() + faker.name.lastName())
    cy.get(el.inputEmail).type(faker.internet.email())
    cy.get(el.inputPassword).type(12345678)

  }
  submitFormRegister() {
    cy.get(el.buttonSubmit).click()

  }
  validateSuccessRegister() {
    cy.get(el.divArticlePreview).should(
      'contain',
      'No articles are here... yet.'
    )
  }

} export default new Cadastro()