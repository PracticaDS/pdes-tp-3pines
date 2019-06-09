import '../../setupTests.js'
import { ACCIONES, MAQUINAS } from '../../constantes.js';
import {ESTE, NORTE, OESTE, SUR} from '../../models/Maquina';

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
      expect(maquinaRotada.direccion).toEqual(ESTE);
      // Vuelvo a rotar la maquina
      maquinaRotada = accionRotar.accion.ejecutar(maquinaRotada)
      expect(maquinaRotada.direccion).toEqual(SUR);
      // Vuelvo a rotar la maquina
      maquinaRotada = accionRotar.accion.ejecutar(maquinaRotada)
      expect(maquinaRotada.direccion).toEqual(OESTE);
      // Vuelvo a rotar la maquina
      maquinaRotada = accionRotar.accion.ejecutar(maquinaRotada)
      expect(maquinaRotada.direccion).toEqual(NORTE);
    })
  })
})
