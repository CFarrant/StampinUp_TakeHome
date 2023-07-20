describe('Search Spec', () => {
  it('Verify that item "SDET" does not exist', () => {
    // Navigate to Stampin Up Website (and wait for everything to load)
    cy.visit('https://www.stampinup.com/').wait(500)

    // Search for the Not Existant Item "SDET" (and wait for results to load)
    cy.get('[data-testid="search-placeholder"]').click().type('SDET') 
    cy.get('.v-select__slot > :nth-child(3)').click().wait(300)

    // Verify that the message "Sorry, There is no search result for: SDET" exists
    cy.get('.pb-md-3').then(($value) => {$value.text()}).should('contain', 'Sorry,')
    cy.get('.font-weight-regular').then(($value) => {$value.text()}).should('contain', 'There is no search result for:')
    cy.get('q').should('contain', 'SDET')
  })

  it('Verify that item "A MILLION THANKS KIT" exists', () => {
    // Navigate to Stampin Up Website (and wait for everything to load)
    cy.visit('https://www.stampinup.com/').wait(500)

    // Search for an Existant Item "A MILLION THANKS KIT" (and wait for results to load)
    cy.get('[data-testid="search-placeholder"]').click().type('A MILLION THANKS KIT') 
    cy.get('.v-select__slot > :nth-child(3)').click().wait(300)
    
    // Verify that the message "Product Search Results for A MILLION THANKS KIT" exists
    cy.get('.font-weight-regular').then(($value) => {$value.text()}).should('contain', 'Product Search Results for')
    cy.get('q').should('contain', 'A MILLION THANKS KIT')
    
    // Click on the Product Found
    cy.get(':nth-child(1) > .add-processing > [data-testid="availableProduct"] > :nth-child(2) > .order-sm-2 > .px-0 > [data-testid="product-card-link"] > [data-testid="product-title"]').click()
  })
})