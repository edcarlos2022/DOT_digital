const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://loja.vr.com.br/',
    specPattern: 'cypress/integration/**/*.spec.js'
  }
}
