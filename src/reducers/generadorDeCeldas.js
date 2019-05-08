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

export default generarCeldas