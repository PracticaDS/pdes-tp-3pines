import React from 'react';
import '../../styles/Ganancia.scss'

const Ganancia = ({ganancia, usuario}) => {
  return (
    <div className='ganancia-contenedor'>
      Ganancias <span className='ganancia'>${ganancia}</span>
      <code id="nombre-usuario">{usuario}</code>
    </div>
  )
}

export default Ganancia;
