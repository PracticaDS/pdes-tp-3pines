import '../../setupTests.js'
import reducer from '../../reducers/acciones'
import {SELECCIONAR_ACCION} from "../../actions/seleccionarAccion";

describe('SELECCIONAR_ACCION', () => {

  it('Al seleccionar una maquina Starter el estado cambia y lo refleja', () => {
    const estadoInicial = {}
    const accion = {
      type: SELECCIONAR_ACCION,
      payload: 'Starter',
    }

    const estadoFinal = reducer(estadoInicial, accion)

    expect(estadoFinal.accionSeleccionada).toEqual('Starter')
  })

  it('Al seleccionar una maquina Starter dos veces deja de haber una accion seleccionada', () => {
    const estadoInicial = {}
    const accion = {
      type: SELECCIONAR_ACCION,
      payload: 'Starter',
    }

    const estadoIntermedio = reducer(estadoInicial, accion)
    const estadoFinal = reducer(estadoIntermedio, accion)

    expect(estadoFinal.accionSeleccionada).toEqual('')
  })

  it('Al seleccionar una maquina Starter y luego seleccionar una accion Mover el estado lo refleja', () => {
    const estadoInicial = {}
    const accionInicial = {
      type: SELECCIONAR_ACCION,
      payload: 'Starter',
    }
    const accionFinal = {
      type: SELECCIONAR_ACCION,
      payload: 'Mover',
    }

    const estadoIntermedio = reducer(estadoInicial, accionInicial)
    const estadoFinal = reducer(estadoIntermedio, accionFinal)

    expect(estadoFinal.accionSeleccionada).toEqual('Mover')
  })
})
