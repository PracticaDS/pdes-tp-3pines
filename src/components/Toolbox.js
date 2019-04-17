import React from 'react';
import './Toolbox.css';

export const Toolbox = (props) => { 
  return (
    <div className="toolbox-contenedor">
      <div className="maquinas-contenedor borde-piola">
      	<div className="titulo">Máquinas</div>
  	    <div className="toolbox-maquinas">
      </div>
	    </div>
      <div className="acciones-contenedor borde-piola">
        <div className="titulo">Acciones</div>
  	    <div className="toolbox-acciones">
      </div>
    	</div>
    </div>
  )
}
