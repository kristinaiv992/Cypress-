describe('API Response Check', () => {
    it('API Random Joke Response Status', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('chuck')
        cy.get('@chuck').its('status').should('equal', 200)

    });
})