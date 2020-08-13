describe('Searchbox Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into search box and submit with pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}' , {delay: 150})
    });


    it('should display the search results', () => {
        cy.get('h2').contains('Search Results:')
        cy.wait(3000)
    });

    it('Should click on the sign up button', () => {
        cy.get('#signin_button').click()
        // cy.get('.offset3 > a').click()
        cy.wait(3000)
    });

    it('Should click on the forgot password link', () => {
        cy.get('a').contains('Forgot your password ?').click()
        cy.wait(3000)
    });
    it('Should enter the email address', () => {
        cy.get('#user_email').type('kristinaiv992@gmail.com', {delay: 150})
        cy.wait(3000)
    });
    it('Should click on the send your password button', () => {
        cy.get('input[type="submit"]').click()
        cy.wait(30000)
    });
})