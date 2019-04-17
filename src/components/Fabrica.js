import React from 'react';
import './Fabrica.css';

export const Celda = (props) => { 
  return (
    <div id={"celda-"+props.id } className="celda"/>
  )
} 

const crearGrilla = () => {
  return Array.from(Array(100)).map((_, index) => <Celda id={index} key={index}/>)
} 

export const Fabrica = (props) => { 
  return (
    <div className="fabrica-contenedor">
    {
      crearGrilla()
    }
    </div>
  )
}
