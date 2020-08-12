describe('Select Box', () => {

    it('Should visit a page', () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('Should select an option from the dropdown', () =>{
        cy.get('#preferred-interface')
            .select('JavaScript API')
            .should('have.value', 'JavaScript API')
    
        cy.get('#preferred-interface')
            .select('Both')
            .should('have.value', 'Both')
        })

})