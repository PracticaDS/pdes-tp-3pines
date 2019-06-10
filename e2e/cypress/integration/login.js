describe("Una vez cargada la App", () => {
  beforeEach("Cargar la pagina de login", () => {
    cy.visit("/login")
  });

  it("debe aparecer el formulario de login", () => {
    cy.get(".login-form")
  })

  it("debe poder logearse", () => {
    cy.get('input').click()
      .type('Pepe')
      .should('have.value', 'Pepe')

    cy.get('button')
      .click()

    cy.location('pathname', { timeout: 10000 })
      .should('eq', "/fabrica")

    cy.get("#nombre-usuario")  
      .should('contain', "Pepe")
  })
})