
// describe('My first cypress test run', () => {
//     it('True should be true', () => {
//         expect(true).to.equal(true)
//     })


//     it('5 should be 5', () => {
//         expect(5).to.equal(5)
//     })
// })

// describe('Another descpribe block', () => {
//         it('False should be false', () => {

//             expect(false).to.equal(false)
//         })
// })

/* This is very good test where we add a timeout of 10000 (10 sec) in order the page to be loaded! */

// describe('Browser Actions', () => {
//     it('should load correct url', () => {
//         cy.visit('https://example.com', {timeout: 10 })
//     });
// })

/* Assertions, validating the url address and checking if some element in the page is visible */
/* Implicit waits, Pause, Debugging */

/*
describe('Browser Actions', () => {

    it('should load correct url', () =>
    cy.visit('http://example.com', { timeout: 10000 }))

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    })

    it('should wait for 3 seconds', () => {
        cy.wait(3000)
    })

    it('should pause the execution', () => {
        cy.pause()
    })

    it('should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    })
}) 
*/

/* Interacting with Buttons 

describe('Browser Actions', () => {

    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout: 10000})
        cy.url().should('include', 'index.html' )
    })

    it('should click on the list category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')    
    })

})

*/

/* Validation count of elements on the page 

describe('Validation of the elements on the page', () => {

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })
}) */

/* *Task* */
describe('Checking if the price is the correct one', () => {

    it('Visit the page in less than 10 seconds', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout:10000 })
        cy.url().should('include', 'index.html')
        cy.log('Before Reload!')
        cy.reload()
        cy.log('After Reload')
    })

      it('Find the poetry section', () => {
          
          cy.get('a')
          .contains( 'Poetry')
          .click()
      });      

    it('Should click on the Olio book detail', () => {
        
        cy.get('a')
        .contains('Olio')
        .click()        
    });

    it('Should have the correct price tag', () => {
        
        cy.get('.price_color')
        .contains('£23.88')
    });
})