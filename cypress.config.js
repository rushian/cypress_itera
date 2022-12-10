const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        viewportHeight: 660, // resolução de tela
        viewportWidth: 1000,
        baseUrl: 'https://www.blazedemo.com', // endereço do software alvo
        // eslint-disable-next-line no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
})
