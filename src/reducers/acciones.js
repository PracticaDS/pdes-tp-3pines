import { SELECCIONAR_ACCION } from '../actions/seleccionarAccion';

const accionNula = {
  nombre: ''
}

const estadoInicial = {
  accionSeleccionada: accionNula,
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case SELECCIONAR_ACCION: {
      return estado.accionSeleccionada.nombre === payload.nombre ?
        { ...estado, accionSeleccionada: accionNula } :
        { ...estado, accionSeleccionada: payload }
    }

    default:
      return estado
  }
}

export default reducer;
