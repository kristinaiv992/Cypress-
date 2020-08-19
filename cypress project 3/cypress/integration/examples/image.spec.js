const pagesArr = ["https://example.com/"]

const sizesArr = ["iphone-6", "ipad-2", [1200, 800] ]

// describe('Visual Regression', () => {

//     it('My first visual regression test', () => {
//         cy.visit('https://example.com/')
//         cy.matchImageSnapshot()
//     });
// })


describe('Visual Regression', () => {
    sizesArr.forEach(size => {
        pagesArr.forEach(page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            });
        });
    });
})

describe('Single element snapshot', () => {
    it('Should match a single element on the page', () => {
        cy.visit('https://example.com/')
        cy.get('h1').matchImageSnapshot()
    });
})