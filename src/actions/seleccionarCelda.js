export const SELECCIONAR_CELDA = 'SELECCIONAR_CELDA';

const seleccionarCelda = celdaSeleccionada => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECCIONAR_CELDA,
      accionActual: getState().acciones.accionSeleccionada,
      payload: celdaSeleccionada
    });
  };
};

export default seleccionarCelda
