class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
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

describe('Abstraction with Classes', () => {
    it('Should scroll down and up the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)

        // cy.wait(5000)
        // cy.get('#submit-button').scrollIntoView()
        // cy.wait(5000)
        // cy.get('header').scrollIntoView()

    });

})