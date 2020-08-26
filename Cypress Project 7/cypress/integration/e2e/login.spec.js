import { url } from '../../../config'
import Navbar  from '../../page-objects/components/Navbar'
import  LoginPage  from '../../page-objects/pages/loginPage'
import { login_username, login_password } from '../../../config'
import AccountLinks from '../../page-objects/components/AccountLinks'
 
describe('Login Failed Test', () =>{
    before(function () {
        cy.visit(url)
        Navbar.clickSignIn()
    })
    
    it('Should try to login with invalid credentials', () => {
        LoginPage.login('kika', 'slika')
    });
    it('Should display error message', () => {
        
        LoginPage.displayErrorMessage()
    });
})

describe('Login Success Test', () =>{
    before(function () {
        cy.visit(url)
        Navbar.clickSignIn()
    })
    it('Should login the user to the app', () => {
        
        LoginPage.login(login_username, login_password)
    });

    it('Should logout from the app', () => {
        Navbar.clickLogout()
        Navbar.displaySigninButton()
    });

})
