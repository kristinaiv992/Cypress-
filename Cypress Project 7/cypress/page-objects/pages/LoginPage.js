import BasePage from "../basePage"

export default class LoginPage extends BasePage {
    static login(username, password){
        //cy.get('#user_login').type(username)
        //cy.get('#user_password').type(password)
        cy.login(username, password) //from the commands
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage() {
        //cy.get('.alert.alert-error').should('be.visible')
        cy.isVisible('.alert-error') //from the commands
    }

  
}