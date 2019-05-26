export const NORTE = 'Norte';
export const SUR = 'Sur';
export const ESTE = 'Este';
export const OESTE = 'Oeste';

export const Maquina = (nombre,  imagenActivaUrl, imagenInactivaUrl, frecuencia, costo, direccion = NORTE) => {
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
