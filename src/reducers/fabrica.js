import { AGREGAR_MAQUINA, SELECCIONAR_CELDA, EJECUTAR_ACCION } from '../actions/seleccionarCelda';
import { MAQUINAS } from '../constantes';
import { seleccionar, deseleccionar, esIgualA, asignarMaquina, ejecutarAccion, contieneMaquina } from '../models/Celda'
import generarCeldas from './generadorDeCeldas'

const estadoInicial = {
  celdas: generarCeldas(10, 10),
};

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

    default:
      return estado
  }
}

export default reducer
