import {AGREGAR_MAQUINA, SELECCIONAR_CELDA} from '../actions/seleccionarCelda';
import {MAQUINAS} from "../constantes";
import {generadorDeCeldas} from './generadorDeCeldas'

const estadoInicial = {
  celdas: generadorDeCeldas.generarCeldas(10, 10),
};

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case SELECCIONAR_CELDA: {
      const nuevasCeldas = [...estado.celdas].map(celda => {
        if(celda.esIgualA(payload)) {
          celda.seleccionar()
        } else {
          celda.deseleccionar()
        } 
        return celda 
      })
      return { ...estado, celdas: nuevasCeldas };
    }
    case AGREGAR_MAQUINA: {
      const maquinaAAgregar = MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar)
      const nuevasCeldas = [...estado.celdas].map( celda => {
        if(celda.esIgualA(payload.celda)) {
          celda.asignarMaquina(maquinaAAgregar)
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
