//Skipping an it block in case we don't want the block to be loaded
//We can add a command ONLY or SKIP

describe('Abstraction with classes', () => {
    before(function(){
        //BEFORE AND AFTER HOOKS
        //runs before all tests inside describe
        //setup test data or test context
        //seed or reset the database
    })
 
    after( function (){
 
        //runs after the tests inside describe blocks are done
        //it is good for test clean up
        //clear cookies or local storage
    })
 
    beforeEach(function(){
        //runs before each it block in the describe
    })
 
    afterEach(function () {
        //runs after each it block in the describe
    })
 
    it.skip('First it', () => {      
        HomePage.loadHomePage()
        HomePage.scrollToTop()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    });
    
    
     it('Second it', () => {      
         HomePage.loadHomePage()
         HomePage.scrollToTop()
         HomePage.wait(5000)
         HomePage.scrollToTop()
         HomePage.wait(3000)
     });

     it.only('third it', () => {      
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