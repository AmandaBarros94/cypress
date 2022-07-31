const faker = require('faker')

describe('Cadastro de usuario', () => {

    before
    cy.visit('?controller=authentication&back=my-account')

    it('informar email novo', () => {
        cy.get('email_create').type(faker.internet.email())
    })

    // it('preenche campo obrigatorio', () => {

    // })

    // it('finalizar cadastro', () => {

    // })

})