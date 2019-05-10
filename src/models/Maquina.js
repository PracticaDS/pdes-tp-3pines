export const Maquina = (nombre,  imagenActivaUrl, imagenInactivaUrl, frecuencia, costo, direccion='Norte', tick) => {
  return {
    nombre,
    imagenActivaUrl,
    imagenInactivaUrl,
    frecuencia,
    costo,
    direccion,
    tick: () => {
      console.log("tick from maquina")
    }
  }
}
