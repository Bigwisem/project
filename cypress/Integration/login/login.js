// cypress/support/step_definitions/login.steps.js

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'https://demoblaze.com';

// Background - Given I open the Demo Blaze website
Given('I open the Demo Blaze website', () => {
  cy.visit(baseUrl);  // Visit the website
});

// Scenario: Successfully login with valid credentials
When('I click on the "Login" button', () => {
  cy.get('#login2').click();  // Click on the login button
  cy.get('#loginusername').should('be.visible');  // Ensure the login modal is visible
});

When('I enter a valid username', function () {
  cy.fixture('example').then((credentials) => {
    cy.get('#loginusername').type(credentials.username);  // Type the username from the fixture
    cy.wait (500)
  });
});

When('I enter a valid password', function () {
  cy.fixture('example').then((credentials) => {
    cy.get('#loginpassword').type(credentials.password);  // Type the password from the fixture
    cy.wait(500)
  });
});

When('I enter an invalid username', function () {
  cy.get('#loginusername').type('invaliduser');  // Type an invalid username
});

When('I enter an invalid password', function () {
  cy.get('#loginpassword').type('invalidpassword');  // Type an invalid password
});

When('I do not enter a username', () => {
  cy.get('#loginusername').clear();  // Leave the username field empty
});

When('I do not enter a password', () => {
  cy.get('#loginpassword').clear();  // Leave the password field empty
});

When('I confirm the login', () => {
  cy.contains('button', 'Log in').click();  // Click the login button
});

Then('I should see a welcome message', () => {
  cy.contains('Welcome', { timeout: 30000 }).should('be.visible');
});

// Scenario: Then I should see an alert with the message "Incorrect username or password"
Then('I should see an alert with the message {string}', (expectedMessage) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.eq(expectedMessage);  // Assert that the alert message matches the expected message
  });
});
