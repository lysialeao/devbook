
describe('Devbook aplication', () => {
    it('Visits the DevBook', () => {
        cy.visit('http://localhost:3000/');
        cy.get('h1[data-test="heading"]').contains('DevBook')
    })
})