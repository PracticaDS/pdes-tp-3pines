import React from 'react';
import '../../styles/Toolbox.scss';
import '../../styles/_compartido.scss';

const Accion = ({accion, seleccionarImagen, imagen}) => {
  return (
    <div onClick={seleccionarImagen}>
      <img src={imagen} alt={accion.nombre} className="accion"/>
    </div>
  )
}

export default Accion
