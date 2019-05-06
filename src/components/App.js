import React, { Component } from 'react';
import '../styles/App.scss';
import { Toolbox } from './Toolbox.js'
import { Detalle } from './Detalle';
import { ACCIONES, MAQUINAS } from "../constantes";
import FabricaContainer from "./Fabrica/FabricaContainer";

class App extends Component {
  render() {
    return (
      <div className="app-contenedor">
      	<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>
        <FabricaContainer />
        <Detalle />
      </div>
    );
  }
}

export default App;
