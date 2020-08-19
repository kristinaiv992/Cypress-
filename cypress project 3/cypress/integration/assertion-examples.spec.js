describe('Assertions', () => {
    it('Tips and Ideas', () => {
        
        /*Retry until you find 5 matching elements example 
            should have found 5 elements
            expect($p).to.have.length(3)
            //we are getting the li element with his atribute selected
        */
        cy.get('li.selected').should('have.length', 5)

        /* Retry until input does not have class dissabled  */
        cy.get('form')
            .find('input')
            .should('not.have.class', 'disabled')

        /*Retry until textarea has the correct value */
        cy.get('textarea').should('have.value', 'Placeholder..')

        /*Retry until span does not contain 'click me' */

        cy.get('a')
            .parent('span')
            .should('not.contain', 'click.me')

        /* Retry until the button is visible */
        cy.get('button').should('be.visible')

        /* Retry until loading spinner no longer exists */

        cy.get('#spinner').should('not.exist')
    });
})