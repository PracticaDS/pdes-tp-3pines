import {Maquina} from "./models/Maquina";
import {Accion} from "./models/Accion";

let rotarUrl =  process.env.PUBLIC_URL + '/icons/rotar.svg'
let rotarActivoUrl =  process.env.PUBLIC_URL + '/icons/rotar_activo.svg'

let eliminarUrl =  process.env.PUBLIC_URL + '/icons/eliminar.svg'
let eliminarActivoUrl =  process.env.PUBLIC_URL + '/icons/eliminar_activo.svg'

let moverUrl =  process.env.PUBLIC_URL + '/icons/mover.svg'
let moverActivoUrl =  process.env.PUBLIC_URL + '/icons/mover_activo.svg'

export const ACCIONES = [
  new Accion('Rotar', rotarUrl, rotarActivoUrl),
  new Accion('Eliminar', eliminarUrl, eliminarActivoUrl),
  new Accion('Mover', moverUrl, moverActivoUrl),
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
  new Maquina('Starter', '10', '1', starterUrl, starterActivoUrl),
  new Maquina('Seller', '15', '1', sellerUrl, sellerActivoUrl),
  new Maquina('Crafter', '20', '1', crafterUrl, crafterActivoUrl),
  new Maquina('Furnace', '25', '1', furnaceUrl, furnaceActivoUrl),
  new Maquina('Transporter', '30', '1', transporterUrl, transporterActivoUrl),
]
