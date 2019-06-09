export const MOSTRAR_MENSAJE_DE_ERROR = 'MOSTRAR_MENSAJE_DE_ERROR'

const mostrarMensajeDeError = error => {
  return {
    type: MOSTRAR_MENSAJE_DE_ERROR,
    payload: error
  }
}

export default mostrarMensajeDeError
