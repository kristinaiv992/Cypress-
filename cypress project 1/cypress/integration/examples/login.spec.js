/**Clear & Type text into inputs* */

/*
describe('Working with inputs', () => {
    

    it('Should open the website ', () => {       
       cy.visit('http://zero.webappsecurity.com/login.html');    
        cy.url().should('include', 'login.html')
    });

    it('Should fill the username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Kristina', {delay: 150})
    });

    it('Should fill the password', () => {
       cy.get('#user_password').clear()
       cy.get('#user_password').type('kikikaka10' , {delay: 150})
    });

    it('Should tick the checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    });

    it('Should submit login form', () => {
        cy.contains('Sign in').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    });


}) */

/* Creating aliases and Variables */

describe('Working with inputs', () => { 
    it('Should override the current time', () => {

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        // const date = new Date(2020, 7, 11).getTime()
        // cy.clock(date)
        cy.log(date)
    });
    
    it('Should open the website ', () => {       
        cy.visit('http://zero.webappsecurity.com/login.html');    
         cy.url().should('include', 'login.html')
         cy.clearCookies({log: true})
         cy.clearLocalStorage('your item', {log: true})
     });

     it('Should check the title of the page stored in the header', () => {
         cy.title().should('include', 'Zero - Log in')
     });

    it('Should fill the username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Kristina', {delay: 150})
    });

    it('Should fill the password', () => {
        cy.get('#user_password').as('pass')
        cy.get('@pass').clear()
        cy.get('@pass').type('kikikaka10' , {delay: 150})
     });

     it('Should tick the checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    });

    it('Should submit login form', () => {
        cy.contains('Sign in').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    });


})