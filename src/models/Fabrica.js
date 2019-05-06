import {Celda} from "./Celda";

export class Fabrica {

  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    this.celdas = Array.from(Array(this.ancho * this.alto)).map((_, index) => {
      const posicionX = index % this.ancho;
      const posicionY = (index - posicionX) / this.alto;

      return new Celda(posicionX, posicionY)
    });

    this.celdas.sort((unaCelda, otraCelda) => {
      if(unaCelda.x === otraCelda.x) return unaCelda.y - otraCelda.y;
      return unaCelda.x - otraCelda.x;
    });
  }

  seleccionarCelda(celdaASeleccionar) {
    this.celdas.find((celda) => celda.esIgualA(celdaASeleccionar)).seleccionar();
    this.celdas.filter((celda) => !celda.esIgualA(celdaASeleccionar)).forEach((celda) => celda.deseleccionar());
  }

  asignarMaquinaACelda(celdaAModificar, maquinaAAgregar) {
    this.celdas.find((celda) => celda.esIgualA(celdaAModificar)).asignarMaquina(maquinaAAgregar);
  }
}
