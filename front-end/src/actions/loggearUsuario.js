import api from '../api'
import mostrarMensajeDeError from './mostrarMensajeDeError'
import { push } from 'connected-react-router'

export const logearUsuario = () => {
  return async (dispatch, getState) => {
    try {
      await api.logearUsuario(getState().fabrica.usuario)
      dispatch(push('/fabrica'))
    } catch (error) {
      dispatch(mostrarMensajeDeError(error))
    }
  }
}

export default logearUsuario
