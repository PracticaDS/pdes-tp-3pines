import { MAQUINAS, ACCIONES } from '../constantes'

export const SELECCIONAR_CELDA = 'SELECCIONAR_CELDA'
export const AGREGAR_MAQUINA = 'AGREGAR_MAQUINA'
export const EJECUTAR_ACCION = 'EJECUTAR_ACCION'
export const SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER = 'SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER'
export const MOVER_MAQUINA_DE_CELDA = 'MOVER_MAQUINA_DE_CELDA'

const seSeleccionoUnaMaquina = (accionSeleccionada) => {
  return MAQUINAS.map(({ nombre }) => nombre).includes(accionSeleccionada.nombre)
}

const seSeleccionoUnaAccion = (accionSeleccionada) => {
  return ACCIONES.map(({ nombre }) => nombre).includes(accionSeleccionada.nombre)
}

const seleccionarCelda = celdaSeleccionada => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECCIONAR_CELDA,
      payload: celdaSeleccionada
    })

    const accionSeleccionada = getState().acciones.accionSeleccionada

    if(seSeleccionoUnaMaquina(accionSeleccionada)) {
      dispatch({
        type: AGREGAR_MAQUINA,
        payload: { celda: celdaSeleccionada, maquinaAAgregar: accionSeleccionada.nombre }
      })
    }

    if(seSeleccionoUnaAccion(accionSeleccionada)) {
      
      if (accionSeleccionada.nombre === 'Mover') {
        const laCeldaSeleccionadaTieneMaquina = celdaSeleccionada.maquina
        const seHabiaSeleccionadoUnaMaquinaParaMover = getState().fabrica.moverDesdeCelda  
        if ( !laCeldaSeleccionadaTieneMaquina && !seHabiaSeleccionadoUnaMaquinaParaMover ) {
          return 
        }
        if ( !seHabiaSeleccionadoUnaMaquinaParaMover ) {
          dispatch({
            type: SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER,
            payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
          })
        } 
        else {
          dispatch({
            type: MOVER_MAQUINA_DE_CELDA,
            payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
          })
        }

        return
      }

      dispatch({
        type: EJECUTAR_ACCION,
        payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
      })
    }
  }
}

export default seleccionarCelda
