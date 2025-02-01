const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  pageLoadTimeout: 130000,
  defaultCommandTimeout: 10000, // Tempo máximo para encontrar elementos

  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/*.cy.js',
    retries: {
      runMode: 2,
      openMode: 1
    },
  },
});

