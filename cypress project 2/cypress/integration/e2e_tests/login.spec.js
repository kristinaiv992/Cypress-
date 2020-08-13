describe('Login/Logout Functionality', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html' )
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid data', () => {
        cy.get('form').should('be.visible')
        cy.get('#user_login').type('Kristina')
        cy.get('#user_password').type('kikaslika10')
        cy.get('input[type="submit"]').click()
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
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(pass)
            cy.get('input[type="checkbox"]').click()
            cy.get('input[type="submit"]').click()
        })
        cy.get('.nav.nav-tabs').should('be.visible')
    });

    it('should logout from the app', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html' )
    });


})