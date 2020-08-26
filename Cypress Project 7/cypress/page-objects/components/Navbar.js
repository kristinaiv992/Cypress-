import BasePage from "../basePage"
export default class Navbar {

    static ClickOnLogo(){
        cy.get('.brand').click()
        
    }

    static search(text){
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static clickSettings(){
        cy.contains('Settings').click()
    }

    static clickLogout(){
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }

    static displaySigninButton(){
        cy.isVisible('#signin_button')
    }
}