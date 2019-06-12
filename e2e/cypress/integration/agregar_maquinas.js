describe("Una vez logeado", () => {
  const nick = "Pepe"

  beforeEach("Logear usuario", () => {
    cy.loadLogin()
      .login(nick)
  });

  it("el usuario debe poder seleccionar una maquina", () => {
    cy.seleccionarAccion('#Starter')
  })

  it("el usuario debe poder ver la descripcion de la maquina", () => {
    cy.seleccionarAccion('#Starter')

    cy.assertContains('.nombre-maquina', 'Starter')
    cy.assertContains('.costo-maquina', '10')
    cy.assertContains('.frecuencia-maquina', '1')
  })

  it("el usuario debe poder agregar una maquina al tablero", () => {
    cy.seleccionarAccion('#Starter')
    cy.agregarAlTablero()

    cy.assertHijoCeldaContiene(10, 'materia-prima')
  })

  it("el usuario debe poder rotar una maquina", () => {
    cy.seleccionarAccion('#Starter')
    cy.agregarAlTablero()
    cy.seleccionarAccion('#Rotar')
    cy.aplicarACelda(0)
    
    cy.assertMaquinaContiene(0, 'este')
  })
})