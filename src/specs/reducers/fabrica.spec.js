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
          celdas: generarCeldas(1, 1),
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
          const estadoInicial = {
            celdas: generarCeldas(1, 1),
          };
          const maquina = { posicion: 'Norte' }
          estadoInicial.celdas[0].maquina = maquina

          const accion = {
            type: EJECUTAR_ACCION,
            payload: { celda: Celda(0, 0, maquina), accionAEjecutar: 'Rotar' },
          }
          const estadoFinal = reducer(estadoInicial, accion)

          expect(estadoFinal).not.toEqual(estadoInicial)
          expect(estadoFinal.celdas[0].maquina.posicion).toEqual('Este')   
        })
      })
    })
  })
})
