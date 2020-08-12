describe('Scrolling up and down the page', () => {

    it('Scroll down', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()
    });

})