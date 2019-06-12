describe("Una vez cargada la App", () => {
  beforeEach("Cargar la pagina de login", () => {
    cy.loadLogin()
  });

  it("debe aparecer el formulario de login", () => {
    cy.get(".login-form")
  })

  it("debe poder logearse", () => {
    const nick = "Pepe"
    cy.login(nick)

    cy.assertPath("/fabrica")
    cy.assertContains("#nombre-usuario", nick)
  })
})