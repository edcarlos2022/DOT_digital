Cypress.Commands.add('AbrirLojaVirtual', function(){
    const baseUrl = 'https://loja.vr.com.br'

    cy.visit(baseUrl)

    Cypress.Commands.add('selecionarProdutoAuto', (produtoId = 28) => {
        cy.get('#btn-selecionar-modalidade-avulso').click()
        cy.get(`#adicionar-produto-${produtoId} > .fas`).click()
      });
      
})