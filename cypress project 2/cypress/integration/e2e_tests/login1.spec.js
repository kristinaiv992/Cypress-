//using custom commands

describe('Login/Logout Functionality', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html' )
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid data', () => {
        cy.login("kristina", "kikaslika10")
    });

    it('Should display error message', () => {
        cy.get('.alert.alert-error')
            .should('be.visible')
            .should('contain', 'wrong')
    });

    it('should login to the app', () => {
        cy.fixture('user').then(user1 => {
            var username = user1.id
            var pass = user1.pwd
            cy.login(username, pass)
        })
        cy.get('.nav.nav-tabs').should('be.visible')
    });

    it('should logout from the app', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html' )
    });


})