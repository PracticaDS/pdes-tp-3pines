import { contieneMaquina, armarId, celdaHaciaDondeApunta } from '../models/Celda';
import generarCeldas from './generadorDeCeldas';
import { STARTER, SELLER } from '../constantes';
import { TICK } from '../actions/tick';
import { reducerDeCelda } from './celdas';
import { MOVER_MAQUINA_DE_CELDA, SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER, EJECUTAR_ACCION, AGREGAR_MAQUINA, SELECCIONAR_CELDA } from '../actions/seleccionarCelda';

const ancho = 10
const alto = 10

const estadoInicial = {
  ancho,
  alto,
  celdas: generarCeldas(ancho, alto),
  moverDesdeCelda: null,
  ganancia: 0,
}

const nuevasCeldas = (estado, accion) => {
  return [...estado.celdas].map(celda => reducerDeCelda(celda, accion))
}

function reducer(estado = estadoInicial, { type, payload }) {
  switch (type) {
    case TICK: {
      let nuevaGanancia = estado.ganancia
      const celdasAfectadas = estado.celdas.filter(celda => celda.maquina).reduce((celdasAfectadas, celda) => {
        const celdaAfectada = celdaHaciaDondeApunta(estado.celdas, celda)

        if(celdaAfectada) {
          if (celda.maquina.nombre === STARTER) {
            const materiaAnterior = celdasAfectadas[armarId(celdaAfectada)] ? 
              celdasAfectadas[armarId(celdaAfectada)].materia : celdaAfectada.materia
            celdasAfectadas[armarId(celdaAfectada)] = 
              {...celdaAfectada, materia: materiaAnterior + celda.maquina.tick(celdaAfectada)}
          }
        }

        if (celda.maquina.nombre === SELLER) {
          if (celda.materia > 0) {
            celdasAfectadas[armarId(celda)] = 
              {...celda, materia: celda.materia - 1}
            nuevaGanancia += 10 // Le sumo diez por sumarle algo, habria que tener en cuenta el precio de la materia
          }
        }

        return celdasAfectadas
      }, {})

      if (Object.keys(celdasAfectadas).length === 0) {
        return estado
      }

      const nuevasCeldas = estado.celdas.map(celda => {
        return celdasAfectadas[armarId(celda)] ? celdasAfectadas[armarId(celda)] : celda
      })

      return nuevaGanancia !== estado.ganancia ? 
        { ...estado, celdas: nuevasCeldas, ganancia: nuevaGanancia } : 
        { ...estado, celdas: nuevasCeldas }
    }

    case SELECCIONAR_CELDA: {
      return {...estado, celdas: nuevasCeldas(estado, { type, payload })}
    }

    case AGREGAR_MAQUINA: {
      return {...estado, celdas: nuevasCeldas(estado, { type, payload })}
    }

    case EJECUTAR_ACCION: {
      if (contieneMaquina(payload.celda)) {
        return {...estado, celdas: nuevasCeldas(estado, { type, payload })}
      }
      return estado
    }

    case SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER: {
      return {...estado, moverDesdeCelda: payload.celda}
    }

    case MOVER_MAQUINA_DE_CELDA: {
      const nuevoPayload = {...payload, moverDesdeCelda: estado.moverDesdeCelda}
      return {...estado, celdas: nuevasCeldas(estado, {type, payload: nuevoPayload}), moverDesdeCelda: null}
    }

    default:
      return estado
  }
}

export default reducer
