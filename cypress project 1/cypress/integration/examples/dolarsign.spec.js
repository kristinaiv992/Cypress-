//the dolar sign is converting practically the jquery command into the cypres command
//not useful for production testing

describe('Exploring the $ sign function in Cypress', () => {
    before(function(){       
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('Expose jQuery element in the current window', () => {
        let signInButton = Cypress.$('#signin_button')
        signInButton.click()
    });

    
})