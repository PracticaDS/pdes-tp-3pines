import React from 'react';
import '../styles/Toolbox.css';
import '../styles/_compartido.css';

export const Toolbox = (props) => {
  let rotarUrl =  process.env.PUBLIC_URL + '/icons/rotar.svg'
  let eliminarUrl =  process.env.PUBLIC_URL + '/icons/eliminar.svg'
  let moverUrl =  process.env.PUBLIC_URL + '/icons/mover.svg'
  let starterUrl =  process.env.PUBLIC_URL + '/icons/starter.svg'
  let sellerUrl =  process.env.PUBLIC_URL + '/icons/seller.svg'
  let crafterUrl =  process.env.PUBLIC_URL + '/icons/crafter.svg'
  let furnaceUrl =  process.env.PUBLIC_URL + '/icons/furnace.svg'
  let transporterUrl =  process.env.PUBLIC_URL + '/icons/transporter.svg'

  const activarDesactivarAccion = () => {

  }

  return (
    <div className="toolbox-contenedor">

      <div className="acciones-contenedor">
      	<div className="titulo">Máquinas</div>
  	    <div className="toolbox-acciones borde-piola">
          <div className="row">
            <div className="accion" onClick={activarDesactivarAccion("TODO: pasar la máquina a activar o desactivar por parametro")}>
              <img src={starterUrl} alt="Starter"/>
            </div>
            <div className="accion">
              <img src={sellerUrl} alt="Seller"/>
            </div>
          </div>
          <div className="row">
            <div className="accion">
              <img src={crafterUrl} alt="Crafter"/>
            </div>
            <div className="accion">
              <img src={furnaceUrl} alt="Furnace"/>
            </div>
          </div>
          <div className="row">
            <div className="accion">
              <img src={transporterUrl} alt="Transporter"/>
            </div>
          </div>
        </div>
	    </div>

      <div className="acciones-contenedor">
        <div className="titulo">Edición</div>
  	    <div className="toolbox-acciones borde-piola">
          <div className="row">
            <div className="accion">
              <img src={eliminarUrl} alt="Eliminar"/>
            </div>
            <div className="accion">
              <img src={moverUrl} alt="Mover"/>
            </div>
          </div>
          <div className="row">
            <div className="accion">
              <img src={rotarUrl} alt="Rotar"/>
            </div>
          </div>
        </div>
    	</div>

    </div>
  )
}
