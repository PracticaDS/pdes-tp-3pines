import React from 'react';
import '../styles/Toolbox.css';
import '../styles/_compartido.css';

export const Toolbox = (props) => { 
  return (
    <div className="toolbox-contenedor">
      <div className="maquinas-contenedor">
      	<div className="titulo">Máquinas</div>
  	    <div className="toolbox-maquinas borde-piola">
      </div>
	    </div>
      <div className="acciones-contenedor">
        <div className="titulo">Acciones</div>
  	    <div className="toolbox-acciones borde-piola">
      </div>
    	</div>
    </div>
  )
}
