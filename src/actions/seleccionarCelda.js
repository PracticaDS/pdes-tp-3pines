import {MAQUINAS, ACCIONES} from "../constantes";

export const SELECCIONAR_CELDA = 'SELECCIONAR_CELDA';
export const AGREGAR_MAQUINA = 'AGREGAR_MAQUINA';
export const ELIMINAR_MAQUINA = 'ELIMINAR_MAQUINA';

const seleccionarCelda = celdaSeleccionada => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECCIONAR_CELDA,
      payload: celdaSeleccionada
    });
    const accionSeleccionada = getState().acciones.accionSeleccionada;
    if(MAQUINAS.map(({ nombre }) => nombre).includes(accionSeleccionada) || ACCIONES.map(({ nombre }) => nombre).includes(accionSeleccionada)  ) {
      switch (accionSeleccionada) {
        case 'ELIMINAR_MAQUINA':
          dispatch({
            type: ELIMINAR_MAQUINA,
            payload: { celda: celdaSeleccionada}
          });
      }
      dispatch({
        type: AGREGAR_MAQUINA,
        payload: { celda: celdaSeleccionada, maquinaAAgregar: accionSeleccionada }
      });
    }
  };
};

export default seleccionarCelda
