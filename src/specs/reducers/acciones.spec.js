import '../../setupTests.js'
import reducer from '../../reducers/acciones'
import {SELECCIONAR_ACCION} from "../../actions/seleccionarAccion";
import { ACCIONES } from '../../constantes.js';

describe('SELECCIONAR_ACCION', () => {

  const accionNula = {
    nombre: ''
  }
  const estadoInicial = {
    accionSeleccionada: accionNula,
  }

  it('Al seleccionar una maquina Starter el estado cambia y lo refleja', () => {   
    const accion = {
      type: SELECCIONAR_ACCION,
      payload: 'Starter',
    }

    const estadoFinal = reducer(estadoInicial, accion)

    expect(estadoFinal.accionSeleccionada).toEqual('Starter')
  })

  it('Al seleccionar una maquina Starter dos veces deja de haber una accion seleccionada', () => {
    const accion = {
      type: SELECCIONAR_ACCION,
      payload: 'Starter',
    }

    const estadoIntermedio = reducer(estadoInicial, accion)
    const estadoFinal = reducer(estadoIntermedio, accion)

    expect(estadoFinal.accionSeleccionada.nombre).toEqual('')
  })

  it('Al seleccionar una maquina Starter y luego seleccionar una accion Mover el estado lo refleja', () => {
    const accionInicial = {
      type: SELECCIONAR_ACCION,
      payload: ACCIONES[0],
    }
    const accionFinal = {
      type: SELECCIONAR_ACCION,
      payload: ACCIONES[2],
    }

    const estadoIntermedio = reducer(estadoInicial, accionInicial)
    const estadoFinal = reducer(estadoIntermedio, accionFinal)

    expect(estadoFinal.accionSeleccionada.nombre).toEqual('Mover')
  })
})
