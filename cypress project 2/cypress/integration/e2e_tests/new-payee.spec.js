describe('Will make a new payment into the account service', () => {
    before( function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then (user => {
            var username = user.id
            var password = user.pwd 
            // cy.get('#user_login').type(username)
            // cy.get('#user_password').type(password)
            cy.login(username, password) //using custom commands
        })
        // cy.get('input[type="checkbox"]').click()
        // cy.get('input[type="submit"]').click()
        // cy.get('.nav.nav-tabs').should('be.visible')
    })

    it('Should add a new payee to the list', () => {
        cy.get('#pay_bills_tab').should('contain', 'Pay Bills').click()
        cy.get('a').contains( 'Add New Payee').click()
        cy.get('#np_new_payee_name').type('Kristina')
        cy.get('#np_new_payee_address').type('Maslesha Karposh 2,3 and 1')
        cy.get('#np_new_payee_account').type('122321')
        cy.get('#np_new_payee_details').type('sister')
        cy.get('#add_new_payee').click()

    });

    it('Should display success message', () => {
        cy.get('#alert_content')
            .should('contain', 'successfully')
            .and('contain', 'The new payee')
    });
})