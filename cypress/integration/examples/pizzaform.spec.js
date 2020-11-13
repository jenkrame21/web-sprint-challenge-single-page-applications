describe('Pizza Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const typeNameInput = () => cy.get('input[name="name"]')
    const typeSpecInsInput = () => cy.get('input[name="special_instructions"]')
    const selMulToppings = () => cy.get('input[type="checkbox"]')

    it('User can type into boxes', () => {
        typeNameInput()
            .should('have.value', '')
            .type('Jennifer')
            .should('have.value', 'Jennifer')
        typeSpecInsInput()
            .should('have.value', '')
            .type('Extra garlic sauce, please.')
            .should('have.value', 'Extra garlic sauce, please.')
    })

    it('User can select multiple toppings', () => {
        selMulToppings()
            .click()
    })

    it('User can submit the form', () => {

    })

})