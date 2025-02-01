/// <reference types="Cypress" />

const { should } = require("chai")
const trintaSegundos = 30000

describe('Validar que um produto pode ser adicionado, com sucesso, ao carrinho', function () {
  beforeEach(function () {
    cy.AbrirLojaVirtual()
  })

  it('Acessar a pagina inicial VR Beneficios', function () {

    cy.get('#escolha-modalidade > .page-section-container__holder > .lojavr-style-c-eThXxq > .lojavr-style-c-eDZtRs > .lojavr-style-c-PKtiO')
    .should('have.text', 'A VR tem tudo que sua empresa precisa!')
    // Verifica que há 4 canais de venda dentro do container
    cy.get('.c-gjLIvd article').should('have.length', 4)

    // Valida cada canal de venda 
    cy.get('[data-testid="shelf-product-container-modalidade-multi"]').should('be.visible')
    cy.get('[data-testid="shelf-product-container-modalidade-avulso"]').should('be.visible')
    cy.get('[data-testid="shelf-product-container-modalidade-hcm"]').should('be.visible')
    cy.get('[data-testid="shelf-product-container-8003"]').should('be.visible')

    // Validar os textos dos títulos
    cy.contains('.shelf-product-container__title span', 'Multi').should('be.visible')
    cy.contains('.shelf-product-container__title span', 'Soluções VR').should('be.visible')
    cy.contains('.shelf-product-container__title span', 'Pontomais').should('be.visible')
    cy.contains('.shelf-product-container__title span', 'Crédito Consignado').should('be.visible')

    // Opcional: Validar os botões de seleção
    cy.get('#btn-selecionar-modalidade-multi').should('be.visible')
    cy.get('#btn-selecionar-modalidade-avulso').should('be.visible')
    cy.get('#btn-selecionar-modalidade-hcm').should('be.visible')
    cy.get('#btn-selecionar-8003').should('be.visible')

  })

  it('adicionar quantidade de cartoes usando os botôes (+) e (-) do produto "Auto"', function () {

    cy.selecionarProdutoAuto()
    cy.get('#produto-auto-quantidade')
    cy.get('i[aria-hidden="true"].fa-plus').dblclick()
    cy.get('button.minus-button', { timeout: 10000 }).eq(3).should('be.enabled')
    cy.get('button.minus-button').eq(3).click()
    cy.get('#produto-auto-quantidade').should('have.value', '1')
  })

  it('digitar um valor de credito (minimo) para o produto "Auto" e guardar no carrinho', function () {

    cy.selecionarProdutoAuto()
    cy.get('#produto-auto-quantidade').type(1)
    cy.get('#produto-auto-quantidade').should('have.value', '1')
    cy.get('#produto-auto-valor').type("1,00")

    //validando valor total
    cy.contains('p', /R\$\s?1,00/).invoke('text').should('match', /R\$\s?1,00/)
    cy.get('strong').invoke('text').should('match', /R\$\s?1,00/)

    //seguindo com a compra no carrinho
    cy.intercept('POST', 'https://bf97558cxz.bf.dynatrace.com/bf*').as('aguardaCarrinho')
    cy.get('#carrinho-seguir-para-a-compra').click()
    cy.wait('@aguardaCarrinho').its('response.statusCode').should('eq', 200)
  })

  it('digitar um valor de credito (maximo) para o produto "Auto" e guardar no carrinho', function () {

    cy.selecionarProdutoAuto()
    cy.get('#produto-auto-quantidade').type(300)
    cy.get('#produto-auto-quantidade').should('have.value', '300')
    cy.get('#produto-auto-valor').type("9999,99")

    //validando valor total
    cy.contains('p', /R\$\s?2.999.997,00/).invoke('text').should('match', /R\$\s?2.999.997,00/)
    cy.get('strong').invoke('text').should('match', /R\$\s?2.999.997,00/)

    //seguindo com a compra no carrinho
    cy.intercept('POST', 'https://bf97558cxz.bf.dynatrace.com/bf*').as('aguardaCarrinho')
    cy.get('#carrinho-seguir-para-a-compra').click()
    cy.wait('@aguardaCarrinho').its('response.statusCode').should('eq', 200)
  })

})