export class Celda {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.seleccionada = false;
    this.maquina = null;
  }

  seleccionar() {
    this.seleccionada = true;
  }

  deseleccionar() {
    this.seleccionada = false;
  }

  esIgualA(otraCelda) {
    return this.x === otraCelda.x && this.y === otraCelda.y;
  }

  asignarMaquina(unaMaquina) {
    this.maquina = unaMaquina;
  }
}
