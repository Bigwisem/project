Cypress.Commands.add('login', (email, password) => {

    cy.wait(2000)
 
    cy.get('#loginusername').type(email);
 
    cy.wait(2000)
 
    cy.get('#loginpassword').type(password);
 
    cy.wait(2000)
 
    cy.get("button[onclick='logIn()']").click();
 
 });
 
 Cypress.Commands.add('navigateToPage', (url) => {
 
    cy.viewport(1800, 1000);
 
    cy.visit(url);
 
 });
 
 Cypress.Commands.add('clickOnElement', (selector, text) => {
 
    cy.get(selector).contains(text).click();
 
 });