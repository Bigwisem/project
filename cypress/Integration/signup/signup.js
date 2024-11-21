// cypress/support/step_definitions/signup.steps.js

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'https://demoblaze.com';

// Background - Given I open the Demo Blaze website
Given('I open the Demo Blaze website', () => {
  cy.visit(baseUrl); // Visit the website
});

// Scenario: Successfully sign up with a unique username
When('I click on the "Sign up" button', () => {
  cy.get('#signin2').click();  // Click on the sign-up button
  cy.get('#sign-username').should('be.visible'); // Ensure the modal is loaded
});

When('I enter a unique username', function () {
  const uniqueUsername = `user${Date.now()}`; // Generate a unique username
  cy.get('#sign-username').type(uniqueUsername);  // Type the unique username
});

When('I enter an existing username', function () {
  cy.fixture('example').then((credentials) => {
    const existingUsername = credentials.username;  // Use the username from the fixture
    cy.get('#sign-username').type(existingUsername);  // Type the existing username
  });
});

When('I do not enter a username', () => {
  cy.get('#sign-username').clear();  // Leave the username input blank
});

When('I enter a password', function () {
  cy.fixture('example').then((credentials) => {
    cy.get('#sign-password').type(credentials.password);  // Type the password from the fixture
  });
});

When('I do not enter a password', () => {
  cy.get('#sign-password').clear();  // Leave the password input blank
});

When('I confirm the signup', () => {
  cy.contains('button', 'Sign up').click();  // Click the sign-up button
});

// Scenario: Then I should see an alert with the message "Sign up successful."
Then('I should see an alert with the message {string}', ('Please fill out Username and Password.') => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.eq('Please fill out Username and Password.');  // Assert that the alert message matches the expected message
  });
});
