import {AGREGAR_MAQUINA, SELECCIONAR_CELDA} from '../actions/seleccionarCelda';
import {Fabrica} from "../models/Fabrica";
import {MAQUINAS} from "../constantes";

const estadoInicial = {
  fabrica: new Fabrica(10, 10)
};

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case SELECCIONAR_CELDA: {
      const nuevaFabrica = Object.assign(estado.fabrica);
      nuevaFabrica.seleccionarCelda(payload);

      return { ...estado, fabrica: nuevaFabrica };
    }
    case AGREGAR_MAQUINA: {
      const nuevaFabrica = Object.assign(estado.fabrica);
      nuevaFabrica.asignarMaquinaACelda(payload.celda, MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar));

      return { ...estado, fabrica: nuevaFabrica };
    }
    default:
      return estado;
  }
}

export default reducer;
