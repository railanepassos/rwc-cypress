class Routes {
  as = {
    postArticles: 'POSTArticles',
    getArticles: 'GETArticles',
    getComents: 'GETComents'
  }
  init() {
    // POST 200 /api/articles
    // GET 200 /api/articles/cypress-blsg7f
    // GET 200 /api/articles/cypress-blsg7f/comments
    // https://demo.realworld.io/#/article/cypress-blsg7f
    cy.intercept('POST', '**/api/articles').as(this.as.postArticles)
    cy.intercept('GET', '**/api/articles/cypress-**').as(this.as.getArticles)
    cy.intercept('GET', '**/api/articles/cypress-**/comments').as(
      this.as.getComents
    )
  }
}
export default new Routes()
