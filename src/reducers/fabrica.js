import {AGREGAR_MAQUINA, SELECCIONAR_CELDA} from '../actions/seleccionarCelda';
import {MAQUINAS} from "../constantes";
import generarCeldas from './generadorDeCeldas'
import { seleccionar, deseleccionar, esIgualA, asignarMaquina } from '../models/Celda'

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
    default:
      return estado;
  }
}

export default reducer;
