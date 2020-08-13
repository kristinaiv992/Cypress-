describe('Navbar Test', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').contains( 'Online Banking').should('be.visible')
    });

    it('Should display feedback content page', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include' ,'index.html')
    });
})