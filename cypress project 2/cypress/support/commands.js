// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//we will create a custom command for the first steps we are repeating all the time

Cypress.Commands.add('login', (username, pass) => {

    cy.get('#user_login').type(username)
    cy.get('#user_password').type(pass)
    cy.get('input[type="checkbox"]').click()
    cy.get('input[type="submit"]').click()
    //cy.get('.nav.nav-tabs').should('be.visible')
} )