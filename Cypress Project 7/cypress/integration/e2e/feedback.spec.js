import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback test using Fixtures', () => {
    before(function () {
        FeedbackPage.load()
    })
    it('Should submit feedback form', () => {
        FeedbackPage.submitFeedback()
    });
})