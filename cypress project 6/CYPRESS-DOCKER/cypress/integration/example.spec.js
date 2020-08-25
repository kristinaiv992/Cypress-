describe('Cypress Tests with Docker', () => {
    it('Should load website', () => {
        cy.visit('https://www.example.com')
    });

    it('Should load the h1 element', () => {
        cy.get('h1').should('be.visible')
    });
})