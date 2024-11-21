const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  projectId: "mkh3tm", // This is required for recording runs
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/*.feature", // Adjust if necessary
    baseUrl: "https://www.demoblaze.com", // Replace with your app's base URL
    supportFile: "cypress/support/e2e.js", // Ensure this file exists
  },
});
