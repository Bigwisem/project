import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'https://demoblaze.com';

Given('I open the Demo Blaze website', () => {
  cy.visit(baseUrl); // Visit the website
});

When('I click on the "Sign up" button', () => {
  cy.get('#signin2').click(); // Click on the sign-up button
  cy.get('#sign-username').should('be.visible'); // Ensure the modal is loaded
});

When('I enter a unique username', function () {
  const uniqueUsername = `user${Date.now()}`;
  cy.wrap(uniqueUsername).as('uniqueUsername'); // Save for future use
  cy.get('#sign-username').type(uniqueUsername);
});

When('I enter an existing username', function () {
  cy.fixture('example').then((credentials) => {
    cy.get('#sign-username').type(credentials.username); // Use the username from the fixture
  });
});

When('I do not enter a username', () => {
  cy.get('#sign-username').clear(); // Leave the username input blank
});

When('I enter a password', function () {
  cy.fixture('example').then((credentials) => {
    cy.get('#sign-password').type(credentials.password); // Type the password
  });
});

When('I do not enter a password', () => {
  cy.get('#sign-password').clear(); // Leave the password input blank
});

When('I confirm the signup', () => {
  cy.contains('button', 'Sign up').click(); // Click the sign-up button
});

Then('I should see an alert with the message {string}', (expectedMessage) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.eq(expectedMessage); // Assert the alert message
  });
});
