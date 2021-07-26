/// <reference types="cypress" />
import Routes from '../../routes'
let faker = require('faker')
const el = require('./elements').ELEMENTS

class Articles {
  accessFormNewPublication() {
    cy.get(el.linkNewPublication).click()
  }

  fillForm(text) {
    cy.get(el.inputTitle).type('Cypress')
    cy.get(el.inputDescription).type(faker.lorem.word())
    cy.get(el.textAreaContent).type(faker.lorem.paragraph())
    cy.get(el.inputTags).type(faker.lorem.word())
  }

  submitPublication() {
    cy.get(el.buttonSubmit).click()
  }

  validateSuccessPublication() {
    cy.wait(`@${Routes.as.postArticles}`).then(postArticlesResponse => {
      expect(postArticlesResponse.response.statusCode).to.eq(200)
    })
    cy.wait(`@${Routes.as.getArticles}`).then(getArticlesResponse => {
      expect(getArticlesResponse.response.statusCode).to.eq(200)
    })
    cy.wait(`@${Routes.as.getComents}`).then(getComentsResponse => {
      expect(getComentsResponse.response.statusCode).to.eq(200)
    })

    cy.url().should('contain', '/article/cypress')
    cy.get('.ng-binding > p').should('be.visible')
    cy.get('.form-control').should('be.visible')
  }
}
export default new Articles()
