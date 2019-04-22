import React from 'react';
import '../styles/Toolbox.scss';
import '../styles/_compartido.scss';

export const Toolbox = (props) => { 
  return (
    <div className="toolbox-contenedor">
      <div className="acciones-contenedor">
      	<div className="titulo">Máquinas</div>
  	    <div className="toolbox-acciones borde-piola">
      </div>
	    </div>
      <div className="acciones-contenedor">
        <div className="titulo">Edición</div>
  	    <div className="toolbox-acciones borde-piola">
      </div>
    	</div>
    </div>
  )
}
