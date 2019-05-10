import { MAQUINAS, ACCIONES } from '../constantes';

export const SELECCIONAR_CELDA = 'SELECCIONAR_CELDA';
export const AGREGAR_MAQUINA = 'AGREGAR_MAQUINA';
export const EJECUTAR_ACCION = 'EJECUTAR_ACCION';
export const INICIAR_MOVER = 'INICIAR_MOVER';
export const FINALIZAR_MOVER = 'FINALIZAR_MOVER';

const seSeleccionoUnaMaquina = (accionSeleccionada) => {
  return MAQUINAS.map(({ nombre }) => nombre).includes(accionSeleccionada.nombre)
}

const seSeleccionoUnaAccion = (accionSeleccionada) => {
  return ACCIONES.map(({ nombre }) => nombre).includes(accionSeleccionada.nombre)
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
        payload: { celda: celdaSeleccionada, maquinaAAgregar: accionSeleccionada.nombre }
      });
    }

    if(seSeleccionoUnaAccion(accionSeleccionada)) {
      
      if (accionSeleccionada.nombre === 'Mover') {

        if ( !celdaSeleccionada.maquina && !getState().fabrica.moverDesdeCelda ) {
          return 
        }

        if ( !getState().fabrica.moverDesdeCelda ) {
          dispatch({
            type: INICIAR_MOVER,
            payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
          });
        } else {
          dispatch({
            type: FINALIZAR_MOVER,
            payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
          });
        }
        return
      }

      dispatch({
        type: EJECUTAR_ACCION,
        payload: { celda: celdaSeleccionada, accionAEjecutar: accionSeleccionada }
      });
    }
  };
};

export default seleccionarCelda
