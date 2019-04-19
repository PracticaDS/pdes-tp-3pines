import React from 'react';
import '../styles/Detalle.css';
import '../styles/_compartido.css';

export const Detalle = (props) => {
  return (
    <div className="detalle-contenedor">
      <div>
        <div className="titulo">Detalles</div>
        {
          props.maquina ?
            <div className="detalle-contenido borde-piola">
              <div className="nombre-maquina">{props.maquina.nombre}</div>
              <div className="costo-maquina">Costo: <span> ${props.maquina.costo} </span></div>
              <div className="frecuencia-maquina">Frecuencia: <span> {props.maquina.frecuencia}/s </span></div>
            </div>
            :
            <div className="detalle-contenido borde-piola"/>
        }
      </div>
    </div>
  )
}
