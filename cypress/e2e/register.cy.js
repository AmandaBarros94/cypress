/// <reference types="cypress" />

const { faker } = require('@faker-js/faker')
const URL = "http://automationpractice.com/index.php?controller=authentication&back=my-account"
const URL_LOGIN = 'http://automationpractice.com/index.php?'
const USER = {
    email: faker.internet.email(),
    userName: {
        first: faker.name.firstName,
        last: faker.name.lastName,
    }
}

describe('search endpoint', () => {
    it('url', () => {
        cy.visit(URL)
    })

})


describe('User registration', () => {


    before(() => {
    
        it('url', () => {
            cy.visit(URL_LOGIN)

        })
    })

    it('inform new email', () => {
        cy.get('#email_create').type(`${USER.email}{enter}`)

    })

    it('fill in mandatory field', () => {
        cy.url().should('include', URL_LOGIN)
        cy.get('#account-creation_form > :nth-child(1) > .clearfix > :nth-child(1)').should('be.visible')
        cy.get('#email').type('have.value', USER)
        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').should(USER.userName.first)
        cy.get('#customer_lastname').should(USER.userName.last)
        cy.get('#passwd').type(faker.internet.password())
        cy.get('#address1').type(faker.address.streetAddress())
        cy.get('#city').type(faker.address.cityName())
        cy.get('#id_state').select(`${faker.datatype.number({ min: 1, max: 20 })}`)
        cy.get('#postcode').type(faker.datatype.number())
        cy.get('#phone_mobile').type(faker.phone.number())

    })
    it('finalize registration', () => {
        cy.get('#submitAccount > span').click()
        cy.get('.account > span').should(USER.userName.first)
        cy.get('.account > span').should(USER.userName.last)
    })

})