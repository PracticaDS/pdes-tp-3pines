import React from 'react';
import '../../styles/Celda.scss';
import AccionContainer from "../Accion/AccionContainer";

const clases = (props) => {
  const claseSeleccionada = props.seleccionada ? 'seleccionada' : '';
  return `celda ${claseSeleccionada}`
};

const Celda = (props) => {
  return (
    <div className={ clases(props) } onClick={props.seleccionar}>
      { !!props.maquina ? <AccionContainer nombre={props.maquina.nombre} imagenActiva={props.maquina.imagenActivaUrl} imagenInactiva={props.maquina.imagenInactivaUrl}/> : '' }
    </div>
  )
};

export default Celda