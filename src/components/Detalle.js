import React from 'react';
import '../styles/Detalle.css';
import '../styles/_compartido.css';

export const Detalle = (props) => {
  return (
    <div className="detalle-contenedor">
      <div>
        <div className="titulo">Detalles</div>
        <div className="detalle-contenido borde-piola">
          <span className="nombre-maquina"></span>
          <span className="costo-maquina"></span>
          <span className="frecuencia-maquina"></span>
        </div>
      </div>
    </div>
  )
}
