import { AGREGAR_MAQUINA, SELECCIONAR_CELDA, EJECUTAR_ACCION, FINALIZAR_MOVER, INICIAR_MOVER } from '../actions/seleccionarCelda'
import { seleccionar, deseleccionar, esIgualA, asignarMaquina, ejecutarAccion, contieneMaquina } from '../models/Celda'
import { MAQUINAS } from '../constantes'
import generarCeldas from './generadorDeCeldas'

const estadoInicial = {
  celdas: generarCeldas(10, 10),
  moverDesdeCelda: null
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
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

    case INICIAR_MOVER: {
      return {...estado, moverDesdeCelda: payload.celda}
    }
    case FINALIZAR_MOVER: {
      const nuevasCeldas = [...estado.celdas].map( celda => {
        // Agregar a celda final
        if (esIgualA(celda, payload.celda)) {
          return {...celda, maquina: estado.moverDesdeCelda.maquina} 
        }
        // Eliminar de celda inicial
        if (esIgualA(celda, estado.moverDesdeCelda)) {
          return {...celda, maquina: null} 
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
