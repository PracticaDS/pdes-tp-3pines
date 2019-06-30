import api from '../api'
import mostrarMensajeDeError from './mostrarMensajeDeError'
import { push } from 'connected-react-router'
import setearFabrica from "./setearFabrica";

export const logearUsuario = () => {
  return async (dispatch, getState) => {
    try {
      const response = await api.logearUsuario(getState().fabrica.nombreUsuario)
      if(response.fabrica.celdas.length > 0){
        dispatch(setearFabrica(response.fabrica))
      }
      dispatch(push('/fabrica'))
    } catch (error) {
      dispatch(mostrarMensajeDeError(error))
    }
  }
}

export default logearUsuario
