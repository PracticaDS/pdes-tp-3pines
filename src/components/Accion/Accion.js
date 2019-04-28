import React from 'react';
import '../../styles/Toolbox.scss';
import '../../styles/_compartido.scss';

const Accion = ({seleccionarImagen, imagen, nombre}) => {
  return (
    <div onClick={seleccionarImagen}>
      <img src={imagen} alt={nombre} className="accion"/>
    </div>
  )
}

export default Accion
