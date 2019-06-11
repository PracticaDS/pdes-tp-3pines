import api from '../api'
import mostrarMensajeDeError from './mostrarMensajeDeError'
import { push } from 'connected-react-router'

export const guardarJuego = () => {
    return async (dispatch, getState) => {
        try {
            await api.guardarJuego(getState().fabrica.usuario, getState().fabrica)
            dispatch(push('/fabrica'))
        } catch (error) {
            dispatch(mostrarMensajeDeError(error))
        }
    }
}

export default guardarJuego