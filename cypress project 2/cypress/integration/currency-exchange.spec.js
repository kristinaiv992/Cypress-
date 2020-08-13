describe('Currency exchange Test' , () => {
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

    it('Should navigates to the Pay-Bills - Purchase Foreign Currency', () => {
        cy.contains('Pay Bills').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('Canada (dollar)')
        cy.get('#pc_amount').type(234)
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()

    });

    it('Should display the correct calculated ammount', () => {
        cy.get('#pc_conversion_amount').should('contain', '220.40 dollar (CAD) = 234.00 U.S. dollar (USD)' )
    });
})