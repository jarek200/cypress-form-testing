describe('contact form', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
  it('should send messages', () => {
    // cy.visit('/about')
    // cy.get('[data-cy="header-about-link"]').click()
    cy.get('[data-cy="contact-input-name"]').type('Jarek')
    cy.get('[data-cy="contact-input-message"]').type('Cypress Test')
    cy.get('[data-cy="contact-input-email"]').type('jarek@jarek.com{enter}')
    // cy.get('[data-cy="contact-btn-submit"]').contains('Send Message').and('not.have.attr', 'disabled')
    // cy.get('[data-cy="contact-btn-submit"]').click()
    // cy.get('[data-cy="contact-btn-submit"]').contains('Sending...').should('have.attr', 'disabled')
  })
  it('should validate the form', () => {
    // cy.visit('http://localhost:5173/about')
    cy.get('[data-cy="contact-btn-submit"]').click()
    cy.get('[data-cy="contact-btn-submit"]').then(el => {
      expect(el).to.not.have.attr('disabled')
      expect(el.text()).to.not.equal('Sending...')
    })
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
    cy.get('[data-cy="contact-input-message"]').as('msgInput')
    cy.get('@msgInput').focus().blur()
    cy.get('@msgInput')
      .parent()
      .should('have.attr', 'class')
      .and('match', /invalid/)

    // cy.get('[data-cy="contact-input-message"]').focus().blur()
    // cy.get('[data-cy="contact-input-message"]')
    //   .parent()
    //   .then(el => {
    //     expect(el.attr('class')).to.contains('invalid')
    //   })

    cy.get('[data-cy="contact-input-name"]').focus().blur()
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should('have.attr', 'class')
      .and('match', /invalid/)

    cy.get('[data-cy="contact-input-email"]').focus().blur()
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .should('have.attr', 'class')
      .and('match', /invalid/)
  })
})
