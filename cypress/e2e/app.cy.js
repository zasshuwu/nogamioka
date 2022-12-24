describe('Navigation', () => {
  it('should load the home page', () => {
    // Go to the homepage at root
    cy.visit('http://localhost:3000/')
  });
  it('should navigate to the full page using the matrix link', () => {
    // start at the index page
    cy.visit('http://localhost:3000/')

    // click on the designated link
    cy.get('Link[href*="/home"]').click()

    // the new url should include /home
    cy.url().should('include', '/about')
  });
  // it('should be able to load components via bottom navigation bar', () => {
  //   cy.visit('/')
  //   cy.get('div.div.button[onClick*=*]').click()
  // })
})