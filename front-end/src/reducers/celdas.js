import {
  seleccionar,
  deseleccionar,
  esIgualA,
  asignarMaquina,
  ejecutarAccion,
} from '../models/Celda'
import { 
  AGREGAR_MAQUINA, 
  SELECCIONAR_CELDA, 
  EJECUTAR_ACCION, 
  MOVER_MAQUINA_DE_CELDA, 
} from '../actions/seleccionarCelda'
import { MAQUINAS } from '../constantes';

export const reducerDeCelda = (estado, { type, payload }) => {
  switch (type) {
    case SELECCIONAR_CELDA: {
      return esIgualA(estado, payload) ? seleccionar(estado) : deseleccionar(estado)
    }
    case AGREGAR_MAQUINA: {
      const maquina = MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar)
      return esIgualA(estado, payload.celda) ? asignarMaquina(estado,  maquina) : estado
    }
    case EJECUTAR_ACCION: {
      return esIgualA(estado, payload.celda) ? ejecutarAccion(estado, payload.accionAEjecutar) : estado
    }
    case MOVER_MAQUINA_DE_CELDA: {
      // Agregar a celda final
      if (esIgualA(estado, payload.celda)) {
        return {...estado, maquina: payload.moverDesdeCelda.maquina} 
      }
      // Reemplazar contenido de celda inicial por celda final
      if (esIgualA(estado, payload.moverDesdeCelda)) {
        return {...estado, maquina: payload.celda.maquina}
      }
      return estado
    }
    default:
      return estado
  }
}