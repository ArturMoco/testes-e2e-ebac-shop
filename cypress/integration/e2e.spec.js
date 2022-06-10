/// <reference types="cypress" />
let dadosLogin

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO
        var quantidade = 1

        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee')
            .click()

        cy.get('.button-variable-item-XS')
            .click()
        cy.get('.button-variable-item-Brown')
            .click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button')
            .click()
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 1)
        cy.get('.woocommerce-message')
            .should('contain', ' “Aero Daily Fitness Tee” foi adicionado no seu carrinho.')


        cy.get('#primary-menu > .menu-item-629 > a')
            .click()


        cy.get('[class="product-block grid"]')
            .contains('Aether Gym Pant')
            .click()
        cy.get('.button-variable-item-33')
            .click()
        cy.get('.button-variable-item-Brown')
            .click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button')
            .click()
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 2)
        cy.get('.woocommerce-message')
            .should('contain', ' “Aether Gym Pant” foi adicionado no seu carrinho.')


        cy.get('#primary-menu > .menu-item-629 > a')
            .click()


        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie')
            .click()
        cy.get('.button-variable-item-L')
            .click()
        cy.get('.button-variable-item-Red')
            .click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button')
            .click()
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 3)
        cy.get('.woocommerce-message')
            .should('contain', ' “Abominable Hoodie” foi adicionado no seu carrinho.')


        cy.get('#primary-menu > .menu-item-629 > a')
            .click()
        cy.get(':nth-child(6) > .page-numbers')
            .click()


        cy.get('[class="product-block grid"]')
            .contains('Stark Fundamental Hoodie')
            .click()
        cy.get('.button-variable-item-L')
            .click()
        cy.get('.button-variable-item-Blue')
            .click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button')
            .click()
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 4)
        cy.get('.woocommerce-message')
            .should('contain', ' “Stark Fundamental Hoodie” foi adicionado no seu carrinho.')


        cy.get('.woocommerce-message > .button')
            .click()
        cy.get('.checkout-button')
            .click()
        cy.get('.showlogin')
            .click()


        cy.get('#username')
            .type(dadosLogin.usuario)
        cy.get('#password')
            .type(dadosLogin.senha, { log: false })
        cy.get('.woocommerce-button')
            .click()

        cy.get('#terms')
            .click()
        cy.get('[class="btn btn-primary btn-outline alt"]')
            .contains('Finalizar compra')
            .click({ force: true })

        cy.get('.woocommerce-notice')
            .should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-details__title')
            .should('contain', 'Detalhes do pedido')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Usando Comandos customizado. ', () => {
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', 1)
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 1)
        cy.get('.woocommerce-message')
            .should('contain', ' “Abominable Hoodie” foi adicionado no seu carrinho.')

        cy.get('#primary-menu > .menu-item-629 > a')
            .click()
        cy.get(':nth-child(6) > .page-numbers')
            .click()

        cy.addProdutos('Stark Fundamental Hoodie', 'L', 'Blue', 1)
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 2)
        cy.get('.woocommerce-message')
            .should('contain', ' “Stark Fundamental Hoodie” foi adicionado no seu carrinho.')

        cy.get('#primary-menu > .menu-item-629 > a')
            .click()

        cy.addProdutos('Aether Gym Pant', '33', 'Brown', 1)
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 3)
        cy.get('.woocommerce-message')
            .should('contain', ' “Aether Gym Pant” foi adicionado no seu carrinho.')

        cy.get('#primary-menu > .menu-item-629 > a')
            .click()

        cy.addProdutos('Aero Daily Fitness Tee', 'XS', 'Brown', 1)
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', 4)
        cy.get('.woocommerce-message')
            .should('contain', ' “Aero Daily Fitness Tee” foi adicionado no seu carrinho.')

        cy.get('.woocommerce-message > .button')
            .click()
        cy.get('.checkout-button')
            .click()
        cy.get('.showlogin')
            .click()


        cy.get('#username')
            .type(dadosLogin.usuario)
        cy.get('#password')
            .type(dadosLogin.senha, { log: false })
        cy.get('.woocommerce-button')
            .click()

        cy.get('#terms')
            .click()
        cy.get('[class="btn btn-primary btn-outline alt"]')
            .contains('Finalizar compra')
            .click({ force: true })

        cy.get('.woocommerce-notice')
            .should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-details__title')
            .should('contain', 'Detalhes do pedido')
    });
})