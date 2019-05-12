import React from 'react';
import '../../styles/Ganancia.scss'

const Ganancia = ({ganancia}) => {
  return (
    <div className='ganancia-contenedor'>
      Ganancias <span className='ganancia'>${ganancia}</span>
    </div>
  )
}

export default Ganancia;
