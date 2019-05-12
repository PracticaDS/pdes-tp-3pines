import React from 'react';
import '../styles/Maquina.scss';

const Maquina = ({maquina}) => {
  return (
    <div>
      <img src={maquina.imagenInactivaUrl} 
           alt={maquina.nombre} 
           className={ `'maquina' ${maquina.direccion.toLowerCase()}` }/>
    </div>
  )
};

export default Maquina