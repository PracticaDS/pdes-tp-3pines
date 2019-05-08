import '../../setupTests.js'
import reducer from '../../reducers/fabrica'
import generarCeldas from '../../reducers/generadorDeCeldas'
import { EJECUTAR_ACCION } from '../../actions/seleccionarCelda';
import { Celda } from '../../models/Celda'
describe('fabrica', () => {

  describe('EJECUTAR_ACCION', () => {
    
    describe('Al ejecutar una accion sobre una celda que no contiene maquinas', () => {
      it('el estado no se modifica', () => {
        const estadoInicial = {
          celdas: generarCeldas(10, 10),
        };
        const accion = {
          type: EJECUTAR_ACCION,
          payload: { celda: Celda(0, 0), accionAEjecutar: 'Rotar' },
        }
    
        const estadoFinal = reducer(estadoInicial, accion)
    
        expect(estadoFinal).toEqual(estadoInicial)
      })
    })
    
    describe('Al ejecutar una accion sobre una celda que contiene una maquina', () => {
      
      describe('Cuando la accion es Rotar', () => {
        it('la maquina contenida en la celda cambia su direccion', () => {

        })
      })
    })
  })
})
