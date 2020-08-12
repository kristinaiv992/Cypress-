describe('Abstraction with classes', () => {
  
    it('Scrolls down', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
       
        HomePage.loadHomePage()
        HomePage.scrollToTop()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    });

})


class BasePage {
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }
    static wait (number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {

    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}