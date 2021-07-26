import articles from '../support/pages/articles'
import Routes from '../support/routes'

//  Padrões de projeto
//  AAA -> Arrange Act Assert
//  PAV -> Preparação Ação Verificação
//  Mais informações -> https://www.lambda3.com.br/2010/08/testando-com-aaa-arrange-act-assert/

context('Publicação', () => {
  //  hooks -> ações executadas antes ou depois dos testes
  //  before / beforeEach
  //  after / afterEach
  beforeEach(() => {
    //  Preparação
    cy.backgroundLogin()
    articles.accessFormNewPublication()
  })

  it('Criar uma nova publicação', () => {
    //  Ação
    articles.fillForm()
    articles.submitPublication()

    //  Verificação
    articles.validateSuccessPublication()
  })
})
