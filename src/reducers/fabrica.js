import { AGREGAR_MAQUINA, SELECCIONAR_CELDA, EJECUTAR_ACCION, MOVER_MAQUINA_DE_CELDA, SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER } from '../actions/seleccionarCelda'
import { seleccionar, deseleccionar, esIgualA, asignarMaquina, ejecutarAccion, contieneMaquina } from '../models/Celda'
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

const celdaEnCoordenada = (celdas, coordenadaX, coordenadaY) => celdas.find(celda => celda.x === coordenadaX && celda.y === coordenadaY)

const celdaHaciaDondeApunta = (celdas, unaCelda) => {
  switch (unaCelda.maquina.direccion) {
    case NORTE: { return celdaEnCoordenada(celdas, unaCelda.x + 1, unaCelda.y) }
    case SUR:   { return celdaEnCoordenada(celdas, unaCelda.x - 1, unaCelda.y) }
    case OESTE: { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y + 1) }
    case ESTE:  { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y - 1) }
  }
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case TICK: {
      const celdasAModificar = estado.celdas.map(celda => {
        if(celda.maquina) {
          const celdaAModificar = celdaHaciaDondeApunta(estado.celdas, celda)

          // Si la maquina es una starter...
          if( celdaAModificar ) return {...celdaAModificar, materia: celdaAModificar.materia + celda.maquina.tick(celdaAModificar)}
        }
      }).filter(celda => celda)

      if ( celdasAModificar.length === 0 ) { 
        return estado
      }

      const nuevasCeldas = estado.celdas.map(celda => {
        const celdaModificada = celdasAModificar.find(celdaAModificar => esIgualA(celdaAModificar, celda))
        
        return celdaModificada ? celdaModificada : celda;
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
