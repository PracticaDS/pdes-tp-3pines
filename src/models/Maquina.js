export const Maquina = (nombre,  imagenActivaUrl, imagenInactivaUrl, frecuencia, costo, direccion='Norte') => {
  return {
    nombre,
    imagenActivaUrl,
    imagenInactivaUrl,
    frecuencia,
    costo,
    direccion,
    tick() {
      // Funcionalidad de Starter
      return 1
    }
  }
}
