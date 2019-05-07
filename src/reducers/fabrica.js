import {AGREGAR_MAQUINA, SELECCIONAR_CELDA} from '../actions/seleccionarCelda';
import {MAQUINAS} from "../constantes";
import {Celda} from "../models/Celda";

const generarCeldas = (ancho, alto) => {
  const celdas = Array.from(Array(ancho * alto)).map((_, index) => {
    const posicionX = index % ancho;
    const posicionY = (index - posicionX) / alto;

    return new Celda(posicionX, posicionY)
  });

  return celdas.sort((unaCelda, otraCelda) => {
      if(unaCelda.x === otraCelda.x) return unaCelda.y - otraCelda.y;
      return unaCelda.x - otraCelda.x;
  });
}

const estadoInicial = {
  celdas: generarCeldas(10, 10),
};

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case SELECCIONAR_CELDA: {
      const nuevasCeldas = [...estado.celdas].map(celda => {
        if(celda.esIgualA(payload)) {
          celda.seleccionar()
        } else {
          celda.deseleccionar()
        } 
        return celda 
      })
      return { ...estado, celdas: nuevasCeldas };
    }
    case AGREGAR_MAQUINA: {
      const maquinaAAgregar = MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar)
      const nuevasCeldas = [...estado.celdas].map( celda => {
        if(celda.esIgualA(payload.celda)) {
          celda.asignarMaquina(maquinaAAgregar)
        }
        return celda
      })
      return { ...estado, celdas: nuevasCeldas };
    }
    default:
      return estado;
  }
}

export default reducer;
