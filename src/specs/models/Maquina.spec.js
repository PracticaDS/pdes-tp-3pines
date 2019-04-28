import '../../setupTests.js'
import { Maquina } from '../../models/Maquina';

describe('Maquina', () => {

  it('esta desactivada por defecto', () => {
    const maquina = new Maquina("Starter", 800, 1)

    expect(maquina.estaActiva()).toEqual(false)
  })

  it('se puede activar', () => {
    const maquina = new Maquina("Starter", 800, 1)

    maquina.activarDesactivar()

    expect(maquina.estaActiva()).toEqual(true)
  })

  it('al activarse cambia el svg', () => {
    const maquina = new Maquina("Starter", 800, 1, '/icons/starter.svg', '/icons/starter_activo.svg')

    maquina.activarDesactivar()

    expect(maquina.estaActiva()).toEqual(true)
    expect(maquina.imagenUrl).toMatch('starter_activo.svg')
  })

  it('al desactivarse cambia el svg', () => {
    const maquina = new Maquina("Starter", 800, 1, '/icons/starter.svg', '/icons/starter_activo.svg')

    // Activo
    maquina.activarDesactivar()
    // Desactivo
    maquina.activarDesactivar()

    expect(maquina.estaActiva()).toEqual(false)
    expect(maquina.imagenUrl).toMatch('starter.svg')
  })
})
