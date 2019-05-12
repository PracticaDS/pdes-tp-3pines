import '../../setupTests.js'
import { TICK } from '../../actions/tick.js'
import reducer from '../../reducers/fabrica'
import generarCeldas from '../../reducers/generadorDeCeldas'
import { EJECUTAR_ACCION, MOVER_MAQUINA_DE_CELDA, SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER } from '../../actions/seleccionarCelda'
import { Celda } from '../../models/Celda'
import { ACCIONES } from '../../constantes.js'
import { ESTE, Maquina, NORTE } from '../../models/Maquina'

describe('fabrica', () => {
  const ancho = 2
  const alto = 2
  
  const estadoInicial = {
    ancho,
    alto,
    celdas: generarCeldas(ancho, alto),
    moverDesdeCelda: null
  }

  describe('EJECUTAR_ACCION', () => {
    const accionAEjecutar = ACCIONES[0]

    describe('Al ejecutar una accion sobre una celda que no contiene maquinas', () => {
      it('el estado no se modifica', () => {
        const estadoInicial = {
          celdas: generarCeldas(1, 1),
        }

        const accion = {
          type: EJECUTAR_ACCION,
          payload: { celda: Celda(0, 0), accionAEjecutar },
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
          }
          const maquina = { direccion: NORTE }
          estadoInicial.celdas[0].maquina = maquina
          
          const accion = {
            type: EJECUTAR_ACCION,
            payload: { celda: Celda(0, 0, maquina), accionAEjecutar },
          }
          const estadoFinal = reducer(estadoInicial, accion)

          expect(estadoFinal).not.toEqual(estadoInicial)
          expect(estadoFinal.celdas[0].maquina.direccion).toEqual(ESTE)
        })
      })

      describe('Cuando la accion es Mover', () => {
        const celdaOrigen = (estado) => estado.celdas[0]
        const celdaDestino = (estado) => estado.celdas[1]
        const maquina = Maquina('Starter', '', '', '1', '10')
        const accionAEjecutar = ACCIONES[2]

        describe('Y se selecciona una maquina por primera vez', () => {
          const estadoInicial = { celdas: generarCeldas(1, 2), moverDesdeCelda: null }
          const seleccionarMaquina = { type: SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER, payload: { celda: celdaOrigen(estadoInicial), accionAEjecutar } }

          beforeEach(() => celdaOrigen(estadoInicial).maquina = maquina)

          it('marca la celda seleccionada como origen del movimiento', () => {
            const estadoFinal = reducer(estadoInicial, seleccionarMaquina)

            expect(estadoFinal.moverDesdeCelda).toEqual(celdaOrigen(estadoInicial))
          })
        })

        describe('Y se selecciona una maquina por segunda vez', () => {
          const estadoInicial = { celdas: generarCeldas(1, 2), moverDesdeCelda: null }
          const seleccionarMaquina = { type: SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER, payload: { celda: celdaOrigen(estadoInicial), accionAEjecutar } }
          const estadoIntermedio = reducer(estadoInicial, seleccionarMaquina)
          const seleccionarDestinoMaquina = { type: MOVER_MAQUINA_DE_CELDA, payload: { celda: celdaDestino(estadoIntermedio), accionAEjecutar } }

          beforeEach(() => celdaOrigen(estadoInicial).maquina = maquina)

          it('mueve la maquina desde la celda seleccionada a la celda destino', () => {
            const estadoFinal = reducer(estadoIntermedio, seleccionarDestinoMaquina)

            expect(estadoFinal.moverDesdeCelda).toEqual(null)
            expect(celdaOrigen(estadoFinal).maquina).toEqual(null)
            expect(celdaDestino(estadoFinal).maquina).toEqual(maquina)
          })

          describe('Si la celda destino ya tenía una maquina', () => {
            const otraMaquina = Maquina('Starter', '', '', '1', '10')

            beforeEach(() => celdaDestino(estadoInicial).maquina = otraMaquina)

            it('La mueve a la celda que había sido marcada como destino', () => {
              const estadoFinal = reducer(estadoIntermedio, seleccionarDestinoMaquina)

              expect(estadoFinal.moverDesdeCelda).toEqual(null)
              expect(celdaOrigen(estadoFinal).maquina).toEqual(otraMaquina)
              expect(celdaDestino(estadoFinal).maquina).toEqual(maquina)
            })
          })
        })
      })
    })
  })

  describe('TICK', () => {
    
    describe('Cuando no hay maquinas en la fabrica', () => {
      
      it('no modifica el estado', () => {
        const estadoFinal = reducer(estadoInicial, {
          type: TICK
        })

        expect(estadoFinal).toEqual(estadoInicial)
      })
    })
    
    describe('Cuando hay maquinas en la fabrica', () => {
      
      describe('Si la maquina que hay es un Starter', () => {
        it('modifica el estado aumentando la materia en la celda a la que apunta la maquina', () => {
          estadoInicial.celdas[0].maquina = Maquina('Starter')

          const estadoFinal = reducer(estadoInicial, {
            type: TICK
          })

          expect(estadoFinal).not.toEqual(estadoInicial)
          const celda = estadoFinal.celdas[2] // Deberia ir a buscar la celda con x: 1 e y: 0
          expect(celda.materia).toEqual(1)
        })

        describe('Si hay otro starter apuntando a la misma celda', () => {

          it('aumenta la cantidad de materia por 2', () => {
            estadoInicial.celdas[0].maquina = Maquina('Starter')

            const estadoIntermedio = reducer(estadoInicial, {
              type: TICK
            })
            const estadoFinal = reducer(estadoIntermedio, {
              type: TICK
            })
  
            expect(estadoFinal).not.toEqual(estadoInicial)
            const celda = estadoFinal.celdas[2] // Deberia ir a buscar la celda con x: 1 e y: 0
            expect(celda.materia).toEqual(2)
          })
        })
      })

      // TODO cuando agreguemos más máquinas este test va a volar
      describe('Si la maquina no era un Starter', () => {
        it('no modifica el estado', () => {
          estadoInicial.celdas[0].maquina = Maquina('Furnance')

          const estadoFinal = reducer(estadoInicial, {
            type: TICK
          })

          expect(estadoFinal).toEqual(estadoInicial)
          const celda = estadoFinal.celdas[2] // Deberia ir a buscar la celda con x: 1 e y: 0
          expect(celda.materia).toEqual(0)
        })
      })
    })
  })
})
