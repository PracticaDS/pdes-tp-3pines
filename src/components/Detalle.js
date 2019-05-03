import React from 'react';
import '../styles/Detalle.scss';
import '../styles/_compartido.scss';

export const Detalle = (props) => {
  return (
    <div className="detalle-contenedor">
      <div>
        <div className="titulo">Detalles</div>
            <div className="detalle-contenido borde-redondeado">
            {
              props.maquina ?
              <div>
                <div className="nombre-maquina">{props.maquina.nombre}</div>
                <div className="costo-maquina">Costo: <span> ${props.maquina.costo} </span></div>
                <div className="frecuencia-maquina">Frecuencia: <span> {props.maquina.frecuencia}/s </span></div>
              </div> :
              ''
            }
            </div>
      </div>
    </div>
  )
}
