export const NORTE = 'Norte';
export const SUR = 'Sur';
export const ESTE = 'Este';
export const OESTE = 'Oeste';

export const Maquina = (nombre,  imagenActivaUrl, imagenInactivaUrl, frecuencia, costo, direccion=NORTE, materiaAcumulada=0) => {
  return {
    nombre,
    imagenActivaUrl,
    imagenInactivaUrl,
    frecuencia,
    costo,
    direccion,
    materiaAcumulada,
    tick() {
      // Funcionalidad de Starter
      return 1
    }
  }
}
