/// <reference types="Cypress" />

const { should } = require("chai")
const tresSegundos = 3000

describe('Validar testes NEGATIVOS', function () {
  beforeEach(function () {
    cy.AbrirLojaVirtual()
  })

  it('adicionar quantidade (<1) e valor (<R$1,00) no  orçamento de cartoes do produto "Auto" e seguir para o carrinho', function () {

    cy.get('#btn-selecionar-modalidade-avulso').click()
    cy.get('#adicionar-produto-28 > .fas').click()
    cy.get('#produto-auto-quantidade').type('0')
    cy.get('span').invoke('text').should('match', /Qtd\. mínima: 1/)
    cy.get('#produto-auto-valor').type("0,99")
    cy.get('span').invoke('text').should('match', /Valor mínimo: R\$\s?1,00/)
    cy.contains('p', /R\$\s?0,00/).invoke('text').should('match', /R\$\s?0,00/)

    //valida que o botão de seguir para o carrinho está desabilitado
    cy.get('#carrinho-seguir-para-a-compra').should('be.disabled')
  })

  it('adicionar quantidade (>300) e credito (em branco) em orçamento de cartoes do produto "Auto" e seguir para o carrinho', function () {

    cy.get('#btn-selecionar-modalidade-avulso').click()
    cy.get('#adicionar-produto-28 > .fas').click()
    cy.get('#produto-auto-quantidade').type('301')
    cy.get('span').invoke('text').should('match', /Qtd\. máxima: 300/);
    cy.get('#produto-auto-valor').type("0")
    cy.get('span').invoke('text').should('match', /É obrigatório/);

    //valida que o botão de seguir para o carrinho está desabilitado
    cy.get('#carrinho-seguir-para-a-compra').should('be.disabled')
  })

  it('Remover orçamento do produto  "Auto"', function () {

    cy.get('#btn-selecionar-modalidade-avulso').click()
    cy.get('#adicionar-produto-28 > .fas').click()
    cy.get('#produto-auto-quantidade').type('301')
    cy.get('span').invoke('text').should('match', /Qtd\. máxima: 300/)
    cy.get('#produto-auto-valor').type("0")
    cy.get('span').invoke('text').should('match', /É obrigatório/)
    cy.contains('p', /R\$\s?0,00/).invoke('text').should('match', /R\$\s?0,00/)

    //valida que o botão de seguir para o carrinho está desabilitado
    cy.get('#remover-produto-28 > .lojavr-style-c-gsmDXe').click()
    cy.get('p.description').contains('pagamento de combustível e serviços automotivos no geral.').should('be.visible')
  })
})