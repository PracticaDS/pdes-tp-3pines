// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
Cypress.Commands.add("loadLogin", () => { 
  cy.visit("/login")
})


Cypress.Commands.add("login", (nick) => { 
  cy.get('input')
    .click()
    .type(nick)
    .should('have.value', nick)

  cy.get('button')
    .click()
})

Cypress.Commands.add("seleccionarAccion", (selector) => { 
  cy.get(selector)
    .click()
    .should('have.attr', 'src')
    .should('include','activo')
})


Cypress.Commands.add("agregarAlTablero", () => { 
  cy.get('.celda:first')
    .click()
    .should('have.class', 'seleccionada')
})

Cypress.Commands.add("aplicarACelda", (celda) => { 
  cy.get('.celda').eq(celda)
    .click()
    .should('have.class', 'seleccionada')
})

Cypress.Commands.add("assertCeldaContiene", (celda, contenido) => { 
  cy.get('.celda').eq(celda)
  .should('have.class', contenido)
})

Cypress.Commands.add("assertHijoCeldaContiene", (celda, contenido) => { 
  cy.get('.celda').eq(celda)
  .children() 
  .should('have.class', contenido)
})

Cypress.Commands.add("assertMaquinaContiene", (celda, contenido) => { 
  cy.get('.celda').eq(celda)
  .children() 
  .children() 
  .should('have.class', contenido)
})

Cypress.Commands.add("assertPath", (path) => { 
  cy.location('pathname', { timeout: 10000 })
    .should('eq', path)
})

Cypress.Commands.add("assertContains", (selctor, contenido) => { 
  cy.get(selctor)
    .should('contain', contenido)
})


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
