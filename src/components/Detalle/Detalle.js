import React from 'react';
import '../../styles/Detalle.scss';
import '../../styles/_compartido.scss';

export const Detalle = ({maquina}) => {
  return (
    <div className="detalle-contenedor">
      <div>
        <div className="titulo">Detalles</div>
        <div className="detalle-contenido borde-redondeado">
          {
            maquina ?
              <div>
                <div className="nombre-maquina">{maquina.nombre}</div>
                <div className="costo-maquina">Costo: <span> ${maquina.costo} </span></div>
                <div className="frecuencia-maquina">Frecuencia: <span> {maquina.frecuencia}/s </span></div>
              </div> :
              ''
          }
        </div>
      </div>
    </div>
  )
}
