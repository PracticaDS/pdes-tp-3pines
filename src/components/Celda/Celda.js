import React from 'react';
import '../../styles/Celda.scss';

const clases = (seleccionada) => {
  const claseSeleccionada = seleccionada ? 'seleccionada' : '';
  return `celda ${claseSeleccionada}`
};

const Celda = ({seleccionada, seleccionar, maquina}) => {
  return (
    <div className={ clases(seleccionada) } onClick={seleccionar}>
      { !!maquina ? <img className={ maquina.direccion.toLowerCase() } src={maquina.imagenInactivaUrl} alt={maquina.nombre} height="100%" width="100%"/> : '' }
    </div>
  )
};

export default Celda