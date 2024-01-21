const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on,config)
    },
    watchForFileChanges : false,
    chromeWebSecurity : false,
    pageLoadTimeout: 40000,
    defaultCommandTimeout: 20000,
  },
});
