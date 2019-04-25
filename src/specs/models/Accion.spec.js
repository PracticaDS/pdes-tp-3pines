import '../../setupTests.js'
import { Accion } from '../../models/Accion';

describe('Accion', () => {

  it('esta desactivada por defecto', () => {
    const accion = new Accion("Eliminar")

    expect(accion.estaActiva()).toEqual(false)
  })

  it('se puede activar', () => {
    const accion = new Accion("Eliminar")

    accion.activarDesactivar()

    expect(accion.estaActiva()).toEqual(true)
  })

  it('al activarse cambia el svg', () => {
    const accion = new Accion("Eliminar", '/icons/eliminar.svg', '/icons/eliminar_activo.svg')

    accion.activarDesactivar()

    expect(accion.estaActiva()).toEqual(true)
    expect(accion.imagenUrl).toMatch('eliminar_activo.svg')
  })

  it('al desactivarse cambia el svg', () => {
    const accion = new Accion("Eliminar", '/icons/eliminar.svg', '/icons/eliminar_activo.svg')

    // Activo
    accion.activarDesactivar()
    // Desactivo
    accion.activarDesactivar()

    expect(accion.estaActiva()).toEqual(false)
    expect(accion.imagenUrl).toMatch('eliminar.svg')
  })
})
