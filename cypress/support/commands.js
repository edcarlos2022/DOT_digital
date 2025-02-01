Cypress.Commands.add('AbrirLojaVirtual', function(){
    const baseUrl = 'https://loja.vr.com.br'

    cy.visit(baseUrl)
})