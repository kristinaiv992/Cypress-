describe('Custom Commands', () => {

    it('Should login to the application using cystom cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    });
})