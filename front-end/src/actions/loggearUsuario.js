import api from '../api'
import mostrarMensajeDeError from './mostrarMensajeDeError'

export const logearUsuario = () => {
  return async (dispatch, getState) => {
    try {
      await api.logearUsuario(getState().fabrica.usuario)
    } catch (error) {
      dispatch(mostrarMensajeDeError(error))
    }
  }
}

export default logearUsuario
