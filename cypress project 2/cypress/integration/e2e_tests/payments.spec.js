describe('Payment Test', () => {
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
    it('Should navigate to the online banking section and send a new payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('Apple')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type(233432)
        cy.get('#sp_date').type('2020-13-08 {enter}')
        cy.get('#sp_description').type('for family support')
        cy.get('input[type="submit"]').click()
        

    });
    it('Shows success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted.' )
    });

})