import { SELECCIONAR_CELDA } from '../actions/seleccionarCelda';
import {Fabrica} from "../models/Fabrica";
import {MAQUINAS} from "../constantes";

const estadoInicial = {
  fabrica: new Fabrica(10, 10)
};

function reducer(estado = estadoInicial, { type, payload, accionActual }) {
  switch (type) {
    case SELECCIONAR_CELDA: {
      const nuevaFabrica = Object.assign(estado.fabrica);
      nuevaFabrica.seleccionarCelda(payload);

      if(accionActual !== "") {
        nuevaFabrica.asignarMaquinaACelda(payload, MAQUINAS.find((maquina) => maquina.nombre === accionActual));
      }

      return { ...estado, fabrica: nuevaFabrica };
    }
    default:
      return estado;
  }
}

export default reducer;
