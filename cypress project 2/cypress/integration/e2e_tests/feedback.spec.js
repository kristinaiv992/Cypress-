describe('Subitting forms and testing them', () => {
    
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#feedback').click()
        cy.url().should('contain', 'feedback.html')
        cy.get('.page-header').should('be.visible')
    })

    it('Should load the feedback form', () => {
      cy.get('form').should('be.visible')
    });

    it('Should fill the feedback form', () => {
        cy.get('#name').type('Kristina', {delay: 150} )
        cy.get('#email').type('kristinaiv992@gmail.com', {delay: 150} )
        cy.get('#subject').type('Greetings to you', {delay: 150} )
        cy.get('#comment').type('I would like only to say that this site is amazing', {delay: 150} )
    });

    it('Should submit the feedback form', () => {
        cy.get('input[type="submit"]').click()
        cy.get('.offset3.span6').contains('Feedback')
    });

})