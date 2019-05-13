import { Celda, ordenarPorCoordenadas } from '../models/Celda';

const generarCeldas = (ancho, alto) => {
  const celdas = Array.from(Array(ancho * alto)).map((_, index) => {
    const posicionX = index % ancho;
    const posicionY = (index - posicionX) / alto;

    return Celda(posicionX, posicionY)
  });

  return celdas.sort(ordenarPorCoordenadas);
}

export default generarCeldas