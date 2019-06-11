import React from 'react';
import '../../styles/Ganancia.scss'

const Ganancia = ({ganancia, usuario, fabrica}) => {
  return (
    <div className='ganancia-contenedor'>
      Ganancias <span className='ganancia'>${ganancia}</span>
      <code id="nombre-usuario">{usuario}</code>

        <div>
            <button type="button" onClick={() => console.log(fabrica)}>Guardar partida</button>
        </div>
    </div>
  )
}

export default Ganancia;
