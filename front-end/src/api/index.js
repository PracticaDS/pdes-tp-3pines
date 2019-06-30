const initialPath = '/api'

const fetchData = (method, data) => { 
  const headers = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return data ? {...headers, body: JSON.stringify(data)} : headers
}

const doFetch = async (method, path, data) => {
  let resp
  try {
    resp = await fetch(`${initialPath}${path}`, fetchData(method, data))
    return await resp.json()
  } catch (e) {
    // eslint-disable-next-line
    console.log(`ERROR en ${method}.\n   Path: ${path}\nStacktrace: `, e)
  }
}

const post = async (path, data) => {
  return doFetch('POST', path, data)
}

// TODO: para cuando lo necesitemos:
// const get = async (path) => {
//   return doFetch('GET', path)
// }

const handleError = async (accion, mensaje) => { 
  try {
    return await accion()
  } catch (error) {
    // eslint-disable-next-line   
    console.log(mensaje, error)
    throw error
  }
}

const api = {
  logearUsuario: async (usuario) => {
    return handleError(
      async () => { return post('/login', {usuario: {nombre: usuario}}) },
      `Error al logear usaurio.\nStackTrace: `
    )
  },

  guardarJuego: async (usuario, fabrica) => {
    return handleError(
      async () => { return post('/fabrica', {usuario: {nombre: usuario}, fabrica: fabrica}) },
      'Error al guardar el juego'
    )
  }
}

export default api
