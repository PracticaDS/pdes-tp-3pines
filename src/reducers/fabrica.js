import { AGREGAR_MAQUINA, SELECCIONAR_CELDA, EJECUTAR_ACCION, MOVER_MAQUINA_DE_CELDA, SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER } from '../actions/seleccionarCelda'
import {
  seleccionar,
  deseleccionar,
  esIgualA,
  asignarMaquina,
  ejecutarAccion,
  contieneMaquina,
  armarId,
  tieneMateriaParaVender
} from '../models/Celda'
import { MAQUINAS, STARTER, SELLER, CRAFTER, consumirUnaMateria, resetearCrafter} from '../constantes'
import { TICK } from '../actions/tick';
import generarCeldas from './generadorDeCeldas'
import {ESTE, NORTE, OESTE, SUR} from "../models/Maquina";

const ancho = 10
const alto = 10

const estadoInicial = {
  ancho,
  alto,
  celdas: generarCeldas(ancho, alto),
  moverDesdeCelda: null,
  ganancia: 0,
}

const celdaEnCoordenada = (celdas, coordenadaX, coordenadaY) => {
  return celdas.find(celda => celda.x === coordenadaX && celda.y === coordenadaY)
}

const celdaHaciaDondeApunta = (celdas, unaCelda) => {
  switch (unaCelda.maquina.direccion) {
    case NORTE: { return celdaEnCoordenada(celdas, unaCelda.x + 1, unaCelda.y) }
    case SUR:   { return celdaEnCoordenada(celdas, unaCelda.x - 1, unaCelda.y) }
    case ESTE:  { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y - 1) }
    case OESTE: { return celdaEnCoordenada(celdas, unaCelda.x, unaCelda.y + 1) }
    default: return null
  }
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
          if (celda.materia > 0 || celda.materiaManufacturada > 0) {
            celdasAfectadas[armarId(celda)] = 
              {...celda, materia: celda.materia-1}
            nuevaGanancia += (tieneMateriaParaVender(celda) ? PRECIO_MATERIA_MANUFACTURADA : PRECIO_MATERIA) // Le sumo diez por sumarle algo, habria que tener en cuenta el precio de la materia
          }
        }

        if (celda.maquina.nombre === CRAFTER && celda.materia > 0){
          if(celda.maquina.materiaAcumulada < 3){
            celdasAfectadas[armarId(celda)] =
                {...celda, materia: celda.materia-1, maquina: consumirUnaMateria(celda.maquina)}
          }
          if(celda.maquina.materiaAcumulada === 3){
            celdasAfectadas[armarId(celda)] =
                {...celda, maquina: resetearCrafter(celda.maquina)}
            celdasAfectadas[armarId(celdaAfectada)] =
                {...celdaAfectada, materiaManufacturada: celdaAfectada.materiaManufacturada + 1 }
          }
        }

        return celdasAfectadas
      }, {})

      if (Object.keys(celdasAfectadas).length === 0) {
        return estado
      }

      const nuevasCeldas = estado.celdas.map(celda => {
        return celdasAfectadas[armarId(celda)] ? celdasAfectadas[armarId(celda)] : celda;
      })

      return nuevaGanancia !== estado.ganancia ? 
        { ...estado, celdas: nuevasCeldas, ganancia: nuevaGanancia } : 
        { ...estado, celdas: nuevasCeldas }
    }
    
    case SELECCIONAR_CELDA: {
      const nuevasCeldas = [...estado.celdas].map(celda => esIgualA(celda, payload) ? seleccionar(celda) : deseleccionar(celda))
      return { ...estado, celdas: nuevasCeldas }
    
    }
    
    case AGREGAR_MAQUINA: {
      const maquinaAAgregar = MAQUINAS.find(({ nombre }) => nombre === payload.maquinaAAgregar)
      const nuevasCeldas = [...estado.celdas].map( celda => esIgualA(celda, payload.celda) ? asignarMaquina(celda, maquinaAAgregar) : celda)
      return { ...estado, celdas: nuevasCeldas }
    }
    
    case EJECUTAR_ACCION: {
      if (contieneMaquina(payload.celda)) {
        const nuevasCeldas = [...estado.celdas].map( celda => esIgualA(celda, payload.celda) ? ejecutarAccion(celda, payload.accionAEjecutar) : celda)
        return { ...estado, celdas: nuevasCeldas }
      }
      return estado
    }

    case SELECCIONAR_CELDA_DE_MAQUINA_A_MOVER: {
      return {...estado, moverDesdeCelda: payload.celda}
    }
    case MOVER_MAQUINA_DE_CELDA: {
      const nuevasCeldas = [...estado.celdas].map( celda => {
        // Agregar a celda final
        if (esIgualA(celda, payload.celda)) {
          return {...celda, maquina: estado.moverDesdeCelda.maquina} 
        }
        // Reemplazar contenido de celda inicial por celda final
        if (esIgualA(celda, estado.moverDesdeCelda)) {
          return {...celda, maquina: payload.celda.maquina}
        }
        return celda
      })
      return { ...estado, celdas: nuevasCeldas, moverDesdeCelda: null}
    }

    default:
      return estado
  }
}

export default reducer
