import React from 'react';
import '../styles/Toolbox.scss';
import '../styles/_compartido.scss';
import Accion from "./Accion/Accion";

export const Toolbox = (props) => {
  const agregarAcciones = () => {
    return props.acciones.map((accion, index) =>
      <Accion key={`accion-${index}`} nombre={accion.nombre} imagenActiva={accion.imagenActivaUrl} imagenInactiva={accion.imagenInactivaUrl}/>
    )
  }

  const agregarMaquinas = () => {
    return props.maquinas.map((maquina, index) =>
      <Accion key={`maquina-${index}`} nombre={maquina.nombre} imagenActiva={maquina.imagenActivaUrl} imagenInactiva={maquina.imagenInactivaUrl}/>
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
