import { NORTE, SUR, ESTE, OESTE } from './Maquina'

const celdaEnCoordenada = (celdas, coordenadaX, coordenadaY) => {
  return celdas.find(celda => celda.x === coordenadaX && celda.y === coordenadaY)
}

export const celdaHaciaDondeApunta = (celdas, unaCelda) => {
  switch (unaCelda.maquina.direccion) {
    case NORTE: { return celdaEnCoordenada(celdas, unaCelda.x + 1, unaCelda.y) }
    case SUR:   { return celdaEnCoordenada(celdas, unaCelda.x - 1, unaCelda.y) }
    case ESTE:  { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y - 1) }
    case OESTE: { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y + 1) }
    default: return null
  }
}

export const seleccionar = (celda) => {
  return celda.seleccionada ? celda : { ...celda, seleccionada: true }
}

export const deseleccionar = (celda) => {
  return !celda.seleccionada ? celda : { ...celda, seleccionada: false }
}

export const esIgualA = (unaCelda, otraCelda) => {
  return unaCelda.x === otraCelda.x && unaCelda.y === otraCelda.y
}

export const asignarMaquina = (celda, maquina) => {
  return {...celda, maquina: maquina}
}

export const ordenarPorCoordenadas = (unaCelda, otraCelda) => {
  return unaCelda.x === otraCelda.x ? 
    unaCelda.y - otraCelda.y : 
    unaCelda.x - otraCelda.x
}

export const ejecutarAccion = (celda, accionAEjecutar) => {
  return {...celda, maquina: accionAEjecutar.accion.ejecutar(celda.maquina)}
}

export const contieneMaquina = (celda) => {
  return celda.maquina !== null 
}

export const armarId = (celda) => {
  return `${celda.x}-${celda.y}`
}

export const Celda = (x, y, maquina = null) => {
  return {
    seleccionada: false,
    maquina,
    materia: 0,
    x,
    y
  }
} 
