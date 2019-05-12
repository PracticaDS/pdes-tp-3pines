import React, { Component } from 'react'
import '../styles/App.scss'
import { Toolbox } from './Toolbox.js'
import DetalleContainer from './Detalle/DetalleContainer'
import { MAQUINAS, ACCIONES } from '../constantes'
import FabricaContainer from './Fabrica/FabricaContainer'
import GananciaContainer from './Ganancia/GananciaContainer';

class App extends Component {
  render() {
    return (
      <div className="app-contenedor">
        <GananciaContainer id="ganancia"/>
      	<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>
        <FabricaContainer id="fabrica"/>
        <DetalleContainer id="detalle"/>
      </div>
    );
  }
}

export default App;
