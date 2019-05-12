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
import { MAQUINAS, STARTER, SELLER } from '../constantes'
import { TICK } from '../actions/tick';
import generarCeldas from './generadorDeCeldas'
import {ESTE, NORTE, OESTE, SUR} from "../models/Maquina";

const ancho = 10
const alto = 10

const estadoInicial = {
  ancho,
  alto,
  celdas: generarCeldas(ancho, alto),
  moverDesdeCelda: null,
  materiaVendida: [],
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
    default: return null
  }
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case TICK: {
      const nuevaMateriaVendida = [...estado.materiaVendida]
      const celdasAfectadas = estado.celdas.filter(celda => celda.maquina).reduce((celdasAfectadas, celda) => {
        const celdaAfectada = celdaHaciaDondeApunta(estado.celdas, celda)

        if(celdaAfectada) {
          if (celda.maquina.nombre === STARTER) {
            const materiaAnterior = celdasAfectadas[armarId(celdaAfectada)] ? 
              celdasAfectadas[armarId(celdaAfectada)].materia : celdaAfectada.materia
            celdasAfectadas[armarId(celdaAfectada)] = 
              {...celdaAfectada, materia: materiaAnterior + celda.maquina.tick(celdaAfectada)}
          }
        }

        if (celda.maquina.nombre === SELLER) {
          if (celda.materia > 0) {
            celdasAfectadas[armarId(celda)] = 
              {...celda, materia: celda.materia-1}
            nuevaMateriaVendida.push(1)
          }
        }

        return celdasAfectadas
      }, {})

      if (Object.keys(celdasAfectadas).length === 0) {
        return estado
      }

      const nuevasCeldas = estado.celdas.map(celda => {
        return celdasAfectadas[armarId(celda)] ? celdasAfectadas[armarId(celda)] : celda;
      })

      return nuevaMateriaVendida.length !== estado.materiaVendida.length ? 
        { ...estado, celdas: nuevasCeldas, materiaVendida: nuevaMateriaVendida } : 
        { ...estado, celdas: nuevasCeldas }
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
