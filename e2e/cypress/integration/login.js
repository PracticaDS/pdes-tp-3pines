describe("Una vez cargada la pagina", () => {

  beforeEach("Cargar la pagina de login", () => {
    cy.visit("http://localhost:3000/login")
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
  })
})