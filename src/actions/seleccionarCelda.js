import {MAQUINAS} from "../constantes";

export const SELECCIONAR_CELDA = 'SELECCIONAR_CELDA';
export const AGREGAR_MAQUINA = 'AGREGAR_MAQUINA';

const seleccionarCelda = celdaSeleccionada => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECCIONAR_CELDA,
      payload: celdaSeleccionada
    });

    const accionSeleccionada = getState().acciones.accionSeleccionada;

    if(MAQUINAS.map(({ nombre }) => nombre).includes(accionSeleccionada)) {
      dispatch({
        type: AGREGAR_MAQUINA,
        payload: { celda: celdaSeleccionada, maquinaAAgregar: accionSeleccionada }
      });
    }
  };
};

export default seleccionarCelda
