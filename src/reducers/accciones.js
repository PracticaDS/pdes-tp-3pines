import { SELECCIONAR_ACCION } from '../actions/seleccionarAccion';

const estadoInicial = {
  accionSeleccionada: '',
  maquinasEnLaFabrica: [],
  ganancia: 0,
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case SELECCIONAR_ACCION: {
      return estado.accionSeleccionada === payload ?
        { ...estado, accionSeleccionada: '' } :
        { ...estado, accionSeleccionada: payload }
    }

    default:
      return estado
  }
}

export default reducer;
