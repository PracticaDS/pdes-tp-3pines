import React from 'react';
import '../../styles/Fabrica.scss';
import CeldaContainer from "../Celda/CeldaContainer";

const anchoCelda = 55;
const altoCelda  = 55;

const gridFromProps = (props) => ({
  gridTemplateColumns: `repeat(${props.ancho}, ${anchoCelda}px)`,
  gridTemplateRows: `repeat(${props.alto}, ${altoCelda}px)`,
  width: `${props.ancho * anchoCelda}px`,
  height: `${props.alto * altoCelda}px`
});

export const Fabrica = (props) => {
  return (
    <div className="fabrica-contenedor" style={ gridFromProps(props) }>
      { props.celdas.map((celda, index) => <CeldaContainer key={index} celda={celda}/>)}
    </div>
  )
};
