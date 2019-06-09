export const SETEAR_USUARIO = 'SETEAR_USUARIO'

const setUsuario = usuario => {
  return {
    type: SETEAR_USUARIO,
    payload: usuario
  }
}

export default setUsuario