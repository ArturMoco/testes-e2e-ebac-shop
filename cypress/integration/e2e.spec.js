/// <reference types="cypress" />
let dadosLogin

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('produtos/')
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Usando Comandos customizado. ', () => {
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(6) > .page-numbers').click()

        cy.addProdutos('Stark Fundamental Hoodie', 'L', 'Blue', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)

        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addProdutos('Aether Gym Pant', '33', 'Brown', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)

        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addProdutos('Aero Daily Fitness Tee', 'XS', 'Brown', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()


        cy.get('#username').type(dadosLogin.usuario)
        cy.get('#password').type(dadosLogin.senha, { log: false })
        cy.get('.woocommerce-button').click()

        cy.get('#terms').click()
        cy.get('[class="btn btn-primary btn-outline alt"]').contains('Finalizar compra').click({ force: true })

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')
    });
})