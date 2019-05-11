import { AGREGAR_MAQUINA, SELECCIONAR_CELDA, EJECUTAR_ACCION, MOVER_MAQUINA_DE_CELDA, SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER } from '../actions/seleccionarCelda'
import {
  seleccionar,
  deseleccionar,
  esIgualA,
  asignarMaquina,
  ejecutarAccion,
  contieneMaquina,
  armarId
} from '../models/Celda'
import { MAQUINAS } from '../constantes'
import { TICK } from '../actions/tick';
import generarCeldas from './generadorDeCeldas'
import {ESTE, NORTE, OESTE, SUR} from "../models/Maquina";

const ancho = 10
const alto = 10

const estadoInicial = {
  ancho,
  alto,
  celdas: generarCeldas(ancho, alto),
  moverDesdeCelda: null
}

const celdaEnCoordenada = (celdas, coordenadaX, coordenadaY) => {
  return celdas.find(celda => celda.x === coordenadaX && celda.y === coordenadaY)
}

const celdaHaciaDondeApunta = (celdas, unaCelda) => {
  switch (unaCelda.maquina.direccion) {
    case NORTE: { return celdaEnCoordenada(celdas, unaCelda.x + 1, unaCelda.y) }
    case SUR:   { return celdaEnCoordenada(celdas, unaCelda.x - 1, unaCelda.y) }
    case ESTE:  { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y - 1) }
    case OESTE: { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y + 1) }
  }
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case TICK: {
      const celdasAfectadas = estado.celdas.filter(celda => celda.maquina).reduce((celdasAfectadas, celda) => {
        const celdaAfectada = celdaHaciaDondeApunta(estado.celdas, celda)

        if(celdaAfectada) {
          // Si la maquina es una starter...
          const materiaAnterior = celdasAfectadas[armarId(celdaAfectada)] ? celdasAfectadas[armarId(celdaAfectada)].materia : celdaAfectada.materia
          celdasAfectadas[armarId(celdaAfectada)] = {...celdaAfectada, materia: materiaAnterior + celda.maquina.tick(celdaAfectada)}
        }

        return celdasAfectadas
      }, {})

      if (Object.keys(celdasAfectadas).length === 0) {
        return estado
      }

      const nuevasCeldas = estado.celdas.map(celda => {
        return celdasAfectadas[armarId(celda)] ? celdasAfectadas[armarId(celda)] : celda;
      })

      return { ...estado, celdas: nuevasCeldas }
    }
    
    case SELECCIONAR_CELDA: {
      const nuevasCeldas = [...estado.celdas].map(celda => esIgualA(celda, payload) ? seleccionar(celda) : deseleccionar(celda))
      return { ...estado, celdas: nuevasCeldas }
    
    }
    
    case AGREGAR_MAQUINA: {
      const maquinaAAgregar = MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar)
      const nuevasCeldas = [...estado.celdas].map( celda => esIgualA(celda, payload.celda) ? asignarMaquina(celda, maquinaAAgregar) : celda)
      return { ...estado, celdas: nuevasCeldas }
    }
    
    case EJECUTAR_ACCION: {
      if (contieneMaquina(payload.celda)) {
        const nuevasCeldas = [...estado.celdas].map( celda => esIgualA(celda, payload.celda) ? ejecutarAccion(celda, payload.accionAEjecutar) : celda)
        return { ...estado, celdas: nuevasCeldas }
      }
      return estado
    }

    case SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER: {
      return {...estado, moverDesdeCelda: payload.celda}
    }
    case MOVER_MAQUINA_DE_CELDA: {
      const nuevasCeldas = [...estado.celdas].map( celda => {
        // Agregar a celda final
        if (esIgualA(celda, payload.celda)) {
          return {...celda, maquina: estado.moverDesdeCelda.maquina} 
        }
        // Reemplazar contenido de celda inicial por celda final
        if (esIgualA(celda, estado.moverDesdeCelda)) {
          return {...celda, maquina: payload.celda.maquina}
        }
        return celda
      })
      return { ...estado, celdas: nuevasCeldas, moverDesdeCelda: null}
    }

    default:
      return estado
  }
}

export default reducer
