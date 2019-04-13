import React from 'react';
import './Fabrica.css';

export const Celda = (props) => { 
  return (
    <div id={"celda-"+props.id } className="celda">
      { props.id }
    </div>
  )
} 

const crearGrilla = () => {
  let rows = [];
  for (let i = 1; i <= 100; i++) {
    rows.push({id: i});
  }
  return rows.map((item) => (
    <Celda id={item.id} key={item.id}/>
  ));
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
