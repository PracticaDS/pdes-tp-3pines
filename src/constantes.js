import { Maquina } from './models/Maquina'
import { Accion } from './models/Accion'

let rotarUrl =  process.env.PUBLIC_URL + '/icons/rotar.svg'
let rotarActivoUrl =  process.env.PUBLIC_URL + '/icons/rotar_activo.svg'

let eliminarUrl =  process.env.PUBLIC_URL + '/icons/eliminar.svg'
let eliminarActivoUrl =  process.env.PUBLIC_URL + '/icons/eliminar_activo.svg'

let moverUrl =  process.env.PUBLIC_URL + '/icons/mover.svg'
let moverActivoUrl =  process.env.PUBLIC_URL + '/icons/mover_activo.svg'

const accionRotar = {
  ejecutar: function(maquina) {
    if (maquina.direccion === 'Norte') return {...maquina, direccion: 'Este'}
    if (maquina.direccion === 'Este') return {...maquina, direccion: 'Sur'}
    if (maquina.direccion === 'Sur') return {...maquina, direccion: 'Oeste'}
    if (maquina.direccion === 'Oeste') return {...maquina, direccion: 'Norte'}
  }
}

export const ACCIONES = [
  Accion('Rotar', rotarActivoUrl, rotarUrl, accionRotar),
  Accion('Eliminar', eliminarActivoUrl, eliminarUrl, {ejecutar: () => {}}),
  Accion('Mover', moverActivoUrl, moverUrl, {ejecutar: () => {}}),
]

let starterUrl =  process.env.PUBLIC_URL + '/icons/starter.svg'
let starterActivoUrl =  process.env.PUBLIC_URL + '/icons/starter_activo.svg'

let sellerUrl =  process.env.PUBLIC_URL + '/icons/seller.svg'
let sellerActivoUrl =  process.env.PUBLIC_URL + '/icons/seller_activo.svg'

let crafterUrl =  process.env.PUBLIC_URL + '/icons/crafter.svg'
let crafterActivoUrl =  process.env.PUBLIC_URL + '/icons/crafter_activo.svg'

let furnaceUrl =  process.env.PUBLIC_URL + '/icons/furnace.svg'
let furnaceActivoUrl =  process.env.PUBLIC_URL + '/icons/furnace_activo.svg'

let transporterUrl =  process.env.PUBLIC_URL + '/icons/transporter.svg'
let transporterActivoUrl =  process.env.PUBLIC_URL + '/icons/transporter_activo.svg'

export const MAQUINAS = [
  Maquina('Starter', starterActivoUrl, starterUrl, '1', '10'),
  Maquina('Seller', sellerActivoUrl, sellerUrl, '1', '15'),
  Maquina('Crafter', crafterActivoUrl, crafterUrl, '1', '20'),
  Maquina('Furnace', furnaceActivoUrl, furnaceUrl, '1', '25'),
  Maquina('Transporter', transporterActivoUrl, transporterUrl, '1', '30', 'Norte'),
]
