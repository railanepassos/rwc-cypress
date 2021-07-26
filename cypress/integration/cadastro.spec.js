import cadastro from '../support/pages/cadastro';

context('Cadastro', () => {
  it('Cadastrar um novo usuario', () => {
    cadastro.accessRegisterPage();
    cadastro.fillFormRegister();
    cadastro.submitFormRegister();
    cadastro.validateSuccessRegister();
    
    
  })
})
