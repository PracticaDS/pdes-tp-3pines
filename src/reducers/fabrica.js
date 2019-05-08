import { AGREGAR_MAQUINA, SELECCIONAR_CELDA, EJECUTAR_ACCION } from '../actions/seleccionarCelda';
import { MAQUINAS, ACCIONES } from '../constantes';
import generarCeldas from './generadorDeCeldas'
import { seleccionar, deseleccionar, esIgualA, asignarMaquina, ejecutarAccion, contieneMaquina } from '../models/Celda'

const estadoInicial = {
  celdas: generarCeldas(10, 10),
};

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case SELECCIONAR_CELDA: {
      const nuevasCeldas = [...estado.celdas].map(celda => {
        if(esIgualA(celda, payload)) {
          return seleccionar(celda)
        } else {
          return deseleccionar(celda)
        } 
      })
      return { ...estado, celdas: nuevasCeldas };
    }
    case AGREGAR_MAQUINA: {
      const maquinaAAgregar = MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar)
      const nuevasCeldas = [...estado.celdas].map( celda => {
        if(esIgualA(celda, payload.celda)) {
          return asignarMaquina(celda, maquinaAAgregar)
        }
        return celda
      })
      return { ...estado, celdas: nuevasCeldas };
    }
    
    case EJECUTAR_ACCION: {
      if (contieneMaquina(payload.celda)) {
        const accionAEjecutar = ACCIONES.find(({ nombre }) => nombre === payload.accionAEjecutar)
        const nuevasCeldas = [...estado.celdas].map( celda => {
          return esIgualA(celda, payload.celda) ? ejecutarAccion(celda, accionAEjecutar) : celda
        })
        return { ...estado, celdas: nuevasCeldas }
      }
      return estado
    }

    default:
      return estado;
  }
}

export default reducer;
