import {Accion} from "./Accion";

export class Maquina extends Accion {

  constructor(nombre, costo, frecuencia, imagenInactivaUrl, imagenActivaUrl) {
    super(nombre, imagenInactivaUrl, imagenActivaUrl);
    this.costo = costo
    this.frecuencia = frecuencia
  }
}
