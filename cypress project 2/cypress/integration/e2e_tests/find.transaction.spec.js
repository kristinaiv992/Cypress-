//in this doc you can find number comparision .its('length').should('be.gt', 0)
describe('Find transaction Test', () => {
    before( function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then (user => {
            var username = user.id
            var password = user.pwd 
            cy.login(username, password) //using custom commands
        })
    })

    it('Should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.url().should('include', 'account-activity.html')
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type(10)
        cy.get('#aa_toAmount').type(20000)
        cy.get('button[type="submit"]').click()
    });

    it('Should display results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr ')
            .its('length')
            .should('be.gt', 0)
    });
})