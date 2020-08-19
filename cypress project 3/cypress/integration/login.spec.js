describe('Searchbox Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html' )
        cy.get('#signin_button').click()
        cy.get('form').should('be.visible')
        cy.get('#user_login').type('Kristina')
        cy.get('#user_password').type('kikaslika10')
        cy.get('#user_remember_me').click()
        //cy.get('input[type="submit"]').click()
    })

    it('Desktop Layout', () => {
        cy.setResolution([1280, 720])
        cy.matchImageSnapshot()
    });

    it('Tablet Layout', () => {
        cy.setResolution('ipad-2')
        cy.matchImageSnapshot()
    });

    it('Mobile Layout', () => {
        cy.setResolution('iphone-6')
        cy.matchImageSnapshot()
    });

    it('Mobile Layout', () => {
        cy.setResolution('samsung-s10')
        cy.matchImageSnapshot()
    });

})