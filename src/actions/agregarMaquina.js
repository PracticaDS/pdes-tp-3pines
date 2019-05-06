export const AGREGAR_MAQUINA = 'AGREGAR_MAQUINA';

const agregarMaquina = maquinaAAgregar => {
  return {
    type: AGREGAR_MAQUINA,
    payload: maquinaAAgregar
  }
};

export default agregarMaquina
