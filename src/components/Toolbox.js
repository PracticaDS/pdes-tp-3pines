import React from 'react';
import '../styles/Toolbox.css';
import '../styles/_compartido.css';
import { ACCIONES, MAQUINAS } from '../Constantes';

export const Toolbox = (props) => {

  const agregarAcciones = () => {
    return ACCIONES.map((accion, index) =>
      <div key={`accion-${index}`}>
        <img src={accion.imagenUrl} alt={accion.nombre} className="accion" onClick={() => { accion.activarDesactivar() }} />
      </div>
    )
  }

  const agregarMaquinas = () => {
    return MAQUINAS.map((maquina, index) =>
      <div key={`maquina-${index}`}>
        <img src={maquina.imagenUrl} alt={maquina.nombre} className="accion" onClick={() => { maquina.activarDesactivar() }}/>
      </div>
    )
  }

  return (
    <div className="toolbox-contenedor">

      <div className="acciones-contenedor">
      	<div className="titulo">Máquinas</div>
  	    <div className="toolbox-acciones borde-piola">
          <div className="row">
            { agregarMaquinas().slice(0,2) }
          </div>
          <div className="row">
            { agregarMaquinas().slice(2,4) }
          </div>
          <div className="row">
            { agregarMaquinas().slice(4,6) }
          </div>
        </div>
	    </div>

      <div className="acciones-contenedor">
        <div className="titulo">Edición</div>
  	    <div className="toolbox-acciones borde-piola">
          <div className="row">
            { agregarAcciones().slice(0, 2) }
          </div>
          <div className="row">
            { agregarAcciones().slice(2, 4) }
          </div>
        </div>
    	</div>

    </div>
  )
}
