describe('Write / Read Data to JSON / Text file', () => {
    it('Should write some data into Json file', () => {
        cy.writeFile('log.json', {

            name: "Kristina",
            lastname: "Ivanova",
            age: 27,
            city: "Skopje"
        })
    });

    it('Should write some data into text file', () => {
        cy.writeFile('log.txt', 'Kristina dont forget to learn cypress using your full potential')
    });

    it('should read and verify data from JSON File', () => {
        cy.readFile('log.json')
        .its('age')
        .should('eq', 27)
    });

    it('Should read and verify data from the text file', () => {
        cy.readFile('log.txt')
        .should('contain', 'Kristina')
    });

})

describe('Should read and verify browser document content', () => {

    it('Verify browser content', () => {
        cy.visit('https://example.com/')
        cy.wait(5000)

        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    });
})