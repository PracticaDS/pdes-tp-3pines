import React from 'react';
import '../../styles/Celda.scss';
import  Maquina from '../Maquina'

const clases = (seleccionada) => {
  const claseSeleccionada = seleccionada ? 'seleccionada' : '';
  return `celda ${claseSeleccionada}`
};

const Celda = ({celda, seleccionada, seleccionar, maquina}) => {
  return (
    <div className={ clases(seleccionada) } onClick={seleccionar}>
      { !!maquina ? <Maquina maquina={maquina}/> : '' }
      { !!celda.materia ? <div className={'materia-prima'}>{ celda.materia }</div> : '' }
    </div>
  )
};

export default Celda