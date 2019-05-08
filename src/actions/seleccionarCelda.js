import {MAQUINAS, ACCIONES} from "../constantes";

export const SELECCIONAR_CELDA = 'SELECCIONAR_CELDA';
export const AGREGAR_MAQUINA = 'AGREGAR_MAQUINA';
export const EJECUTAR_ACCION = 'EJECUTAR_ACCION';

const seSeleccionoUnaMaquina = (accionSeleccionada) => {
  return MAQUINAS.map(({ nombre }) => nombre).includes(accionSeleccionada)
}

const seSeleccionoUnaAccion = (accionSeleccionada) => {
  return ACCIONES.map(({ nombre }) => nombre).includes(accionSeleccionada)
}

const seleccionarCelda = celdaSeleccionada => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECCIONAR_CELDA,
      payload: celdaSeleccionada
    });

    const accionSeleccionada = getState().acciones.accionSeleccionada;

    if(seSeleccionoUnaMaquina(accionSeleccionada)) {
      dispatch({
        type: AGREGAR_MAQUINA,
        payload: { celda: celdaSeleccionada, maquinaAAgregar: accionSeleccionada }
      });
    }
    if(seSeleccionoUnaAccion(accionSeleccionada)) {
      dispatch({
        type: EJECUTAR_ACCION,
        payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
      });
    }
  };
};

export default seleccionarCelda
