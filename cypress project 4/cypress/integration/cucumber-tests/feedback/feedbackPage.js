const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_INPUT = 'input[name="submit"]'

class FeedbackPage {
    
    static visits(){
        cy.visit(URL)
    }

    static fillFeedbackForm(){
        cy.get(NAME_INPUT).type('Kristi')
        cy.get(EMAIL_INPUT).type('kristina.ivanova@north-47.com')
        cy.get(SUBJECT_INPUT).type('Complain')
        cy.get(COMMENT_INPUT).type('just a small comment')
    }

    static submitFeedbackForm(){
        cy.get(SUBJECT_INPUT).click()
    }
}