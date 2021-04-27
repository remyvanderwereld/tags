context('Actions', () => {
  it('Successfully loads', () => {
    cy.visit('/')
  })

  it('Create new group', () => {
    cy.get('#button-square')
      // Check styling.
      .should('have.css', 'font-family', '"Avenir Next", Arial, sans-serif')
      .should('have.css', 'color', 'rgb(33, 150, 243)')
      // Create new group.
      .contains('New group')
      .click()
  })

  // create a random tag name.
  const createRandomString = () => {
    let text = ''
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 10; i++) {
      text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    return text
  }
  const tagName = createRandomString()

  it('Create tag', () => {
    cy.get('#button-input')
      // Check styling.
      .should('have.css', 'font-family', '"Avenir Next", Arial, sans-serif')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      // Create new tag.
      .contains('Add tag')
      .click()
    // Input field should be visible..
    cy.get('#input-text').should('be.visible')

    cy.get('#input-text')
      // create a random tag name.
      .type('test_tag')
      .should('have.value', 'test_tag')

      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('slow.test_tag', { delay: 100 })
      .should('have.value', 'slow.test_tag')

      // Clear text
      .clear()
      .should('have.value', '')

    cy.get('#input-text').type(`${tagName}{enter}`)
    cy.wait(2000)
    cy.get(`#close-button-${tagName}`)
  })

  it('Delete tag', () => {
    cy.get(`#close-button-${tagName}`).click()

    // Tag is deleted
    cy.get(`#close-button-${tagName}`).should('not.exist')
  })
})
