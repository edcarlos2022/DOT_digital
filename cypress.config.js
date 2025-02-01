const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  pageLoadTimeout: 130000,
  defaultCommandTimeout: 10000, // Tempo máximo para encontrar elementos

  e2e: {
    
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://loja.vr.com.br/',
    specPattern: 'cypress/e2e/**/*.cy.js', 
    retries: {
      runMode: 2,  // Tentativas em execução dos testes
      openMode: 1  // Tentativas quando o Cypress é aberto em modo interativo
    },
  }
});

