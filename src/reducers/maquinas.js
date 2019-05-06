import { AGREGAR_MAQUINA } from '../actions/agregarMaquina';

const estadoInicial = {
  maquinas: [],
};

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case AGREGAR_MAQUINA: {
      return { ...estado, maquinas: estado.maquinas.concat(payload) };
    }
    default:
      return estado;
  }
}

export default reducer;
