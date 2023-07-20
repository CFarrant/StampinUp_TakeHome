describe('Checkout Spec', () => {
    it('Verify that you can checkout as Guest', () => {
        // Navigate to Stampin Up Website (and wait for everything to load)
        cy.visit('https://www.stampinup.com/').wait(500)

        // Search for the Shopped Item (and wait for results to load)
        cy.get('[data-testid="search-placeholder"]').click().type('SCORING BLADES MULTIPACK')
        cy.get('.v-select__slot > :nth-child(3)').click().wait(300)

        // Click on the Shopped Item
        cy.get(':nth-child(1) > .add-processing > [data-testid="availableProduct"] > :nth-child(2) > .order-sm-2 > .px-0 > [data-testid="product-card-link"] > [data-testid="product-title"]').click()

        // Add Shopped Item to Cart
        cy.get('[data-testid="item-add-to-cart"]').click()

        // Visit Cart
        cy.get('[data-testid="cartButton"] > .v-btn__content').click().wait(5000)

        // Click on Checkout
        cy.get('[data-testid="btn-order-submit"]').click()

        // Verify that you can checkout as Guest
        cy.get('.col > div.text-center > .text-uppercase').then(($value)=>{$value.text}).should('contain', 'Continue as a guest')
        cy.get('[data-testid="auth-guest-checkout"] > .v-btn__content').then(($value)=>{$value.text}).should('contain', 'Guest checkout')
    })

    it('Verify that you can checkout as existing Customer', () => {
        // Navigate to Stampin Up Website (and wait for everything to load)
        cy.visit('https://www.stampinup.com/').wait(500)

        // Search for the Shopped Item (and wait for results to load)
        cy.get('[data-testid="search-placeholder"]').click().type('ELEGANT BORDERS DIES')
        cy.get('.v-select__slot > :nth-child(3)').click().wait(300)

        // Click on the Shopped Item
        cy.get(':nth-child(1) > .add-processing > [data-testid="availableProduct"] > :nth-child(2) > .order-sm-2 > .px-0 > [data-testid="product-card-link"] > [data-testid="product-title"]').click()

        // Add Shopped Item to Cart
        cy.get('[data-testid="item-add-to-cart"]').click()

        // Visit Cart
        cy.get('[data-testid="cartButton"] > .v-btn__content').click().wait(5000)

        // Click on Checkout
        cy.get('[data-testid="btn-order-submit"]').click()

        // Verify that you can checkout as an existing Customer
        cy.get('.container > :nth-child(1) > .text-center > .text-uppercase').then(($value)=>{$value.text}).should('contain', 'Sign in')
        cy.get('.text-center > :nth-child(4)').then(($value)=>{$value.text}).should('contain', 'Welcome back!')
        cy.get('[data-testid="auth-submit"] > .v-btn__content').then(($value)=>{$value.text}).should('contain', 'Sign in')
    })

    it('Verify that you can checkout as a new Customer', () => {
        // Navigate to Stampin Up Website (and wait for everything to load)
        cy.visit('https://www.stampinup.com/').wait(500)

        // Search for the Shopped Item (and wait for results to load)
        cy.get('[data-testid="search-placeholder"]').click().type('SAYING THANKS KIT')
        cy.get('.v-select__slot > :nth-child(3)').click().wait(300)

        // Click on the Shopped Item
        cy.get(':nth-child(1) > .add-processing > [data-testid="availableProduct"] > :nth-child(2) > .order-sm-2 > .px-0 > [data-testid="product-card-link"] > [data-testid="product-title"]').click()

        // Add Shopped Item to Cart
        cy.get('[data-testid="item-add-to-cart"]').click()

        // Visit Cart
        cy.get('[data-testid="cartButton"] > .v-btn__content').click().wait(5000)

        // Click on Checkout
        cy.get('[data-testid="btn-order-submit"]').click()

        // Verify that you can checkout as an a new Customer
        cy.get('[data-testid="btn-create-account"] > .v-btn__content').then(($value)=>{$value.text}).should('contain', 'Create Account')
    })
})