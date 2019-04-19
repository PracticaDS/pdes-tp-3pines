export class Accion {

  constructor(nombre, imagenInactivaUrl, imagenActivaUrl) {
    this.nombre = nombre
    this.imagenUrl = imagenInactivaUrl

    // privadas
    this.imagenInactivaUrl = imagenInactivaUrl
    this.imagenActivaUrl = imagenActivaUrl
    this.activa = false
  }

  estaActiva() {
    return this.activa;
  }

  activarDesactivar() {
    this.activa = !this.activa
    if (this.estaActiva()) {
      this.imagenUrl = this.imagenActivaUrl
    } else {
      this.imagenUrl = this.imagenInactivaUrl
    }
  }
}
