/// <reference types="cypress" />

const {faker} = require('@faker-js/faker')
const URL = "http://automationpractice.com/index.php?controller=authentication&back=my-account"

describe('Cadastro de usuario', () => {
    it('url', () => {
        cy.visit(URL)
      })

    it('informar email novo', () => {
        cy.get('#email_create').type(`${faker.internet.email()}{enter}`)
        
    })

    it('preenche campo obrigatorio', () => {
        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').type(faker.name.firstName())
        cy.get('#customer_lastname').type(faker.name.lastName())
        cy.get('#passwd').type(faker.internet.password())
        cy.get('#address1').type(faker.address.streetAddress())
        cy.get('#city').type(faker.address.cityName())
        cy.get('#id_state').select(`${faker.datatype.number({min:1, max:20})}`)
        cy.get('#postcode').type(faker.datatype.number())
        cy.get('#phone_mobile').type(faker.phone.number())

    })
     it('finalizar cadastro', () => {
        cy.get('#submitAccount > span').click()

    })

})