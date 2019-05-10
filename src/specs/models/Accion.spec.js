import '../../setupTests.js'
import { ACCIONES, MAQUINAS } from '../../constantes.js';

describe('Accion', () => {

  describe('Eliminar', () => {
    it('TODO', () => {
      
    })
  })

  describe('Rotar', () => {

    it('Dada una maquina, al ejecutarle la accion de rotar, la maquina cambia su direccion', () => {
      const accionRotar = ACCIONES.find(accion => accion.nombre === 'Rotar')
      const maquina = MAQUINAS[0]
      
      let maquinaRotada = accionRotar.accion.ejecutar(maquina)
      expect(maquinaRotada.direccion).toEqual('Este');
      // Vuelvo a rotar la maquina
      maquinaRotada = accionRotar.accion.ejecutar(maquinaRotada)
      expect(maquinaRotada.direccion).toEqual('Sur');
      // Vuelvo a rotar la maquina
      maquinaRotada = accionRotar.accion.ejecutar(maquinaRotada)
      expect(maquinaRotada.direccion).toEqual('Oeste');
      // Vuelvo a rotar la maquina
      maquinaRotada = accionRotar.accion.ejecutar(maquinaRotada)
      expect(maquinaRotada.direccion).toEqual('Norte');
    })
  })

  describe('Mover', () => {
    it('TODO', () => {
      
    })
  })
})
