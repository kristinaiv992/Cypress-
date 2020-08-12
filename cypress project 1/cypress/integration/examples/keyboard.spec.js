/* *Simulate enter* */

describe('keyboard press simulation', () => {
    it('should submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
        cy.get('#searchTerm').type('just some text {enter}')
    })

})