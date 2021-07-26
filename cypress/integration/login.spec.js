import login from '../support/pages/login'

context('Login', { browser: '!firefox' }, () => {
  it('Login com sucesso', () => {
    login.accessLoginPage()
    login.fillFormCredentials()
    login.submitLogin()
  })
})
