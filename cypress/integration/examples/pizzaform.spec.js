describe('Pizza Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const NameInput = () => cy.get('input[name="name"]')
    const SpecInsInput = () => cy.get('input[name="special_instructions"]')
    const selMulToppings = () => cy.get('input[type="checkbox"]')

    it('User can type into boxes', () => {
        NameInput()
            .should('exist')
            .should('have.value', '')
            .type('Jennifer')
            .should('have.value', 'Jennifer')
        SpecInsInput()
            .should('exist')
            .should('have.value', '')
            .type('Extra garlic sauce, please.')
            .should('have.value', 'Extra garlic sauce, please.')
    })

    it('User can select multiple toppings', () => {
        selMulToppings().check()
    })

    it('User can submit the form', () => {
        // Checking button is disabled
        cy.get('button').should('be.disabled')
        // Inputing name
        NameInput()
            .type('Jenn')
            .should('have.value', 'Jenn')
        cy.get('button').should('be.disabled')
        // Selecting 'small' pizza size
        cy.get('select[name="pizzaSize"]').select('small')
        cy.get('button').should('be.disabled')
        // Selecting one sauce option
        cy.get('input[type="radio"]').check('original marinara')
        cy.get('button').should('be.enabled')
        // Checking all toppings
        selMulToppings().check()
        cy.get('button').should('be.enabled')
        SpecInsInput()
            .type('Extra garlic sauce, please.')
            .should('have.value', 'Extra garlic sauce, please.')
        cy.get('button').should('be.enabled').click()
    })
});