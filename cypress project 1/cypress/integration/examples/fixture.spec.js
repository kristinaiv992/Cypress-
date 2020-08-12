describe('Login With Fixtures Data', () => {

it('should try to open the page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    
    cy.fixture('user').then( user => {
        const username = user.username
        const password = user.password
        cy.get('#user_login').type(username)
        cy.get ('#user_password').type(password)
        cy.contains('Sign in').click()
    })
})

})