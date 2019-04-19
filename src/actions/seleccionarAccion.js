// Action creator
export const SELECCIONAR_ACCION = 'SELECCIONAR_ACCION'

const seleccionarAccion = accionSeleccionada => {
  return {
    type: SELECCIONAR_ACCION,
    payload: accionSeleccionada
  }
}

export default seleccionarAccion
