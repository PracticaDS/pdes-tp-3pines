export const SETEAR_FABRICA = 'SETEAR_FABRICA';

const setearFabrica = fabrica => {
  return {
    type: SETEAR_FABRICA,
    payload: fabrica
  }
}

export default setearFabrica
