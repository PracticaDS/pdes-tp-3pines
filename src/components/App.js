import React, { Component } from 'react';
import '../styles/App.scss';
import { Fabrica } from './Fabrica.js'
import { Toolbox } from './Toolbox.js'
import { Detalle } from './Detalle';
import { ACCIONES, MAQUINAS } from "../constantes";

class App extends Component {
  render() {
    return (
      <div className="app-contenedor">
      	<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>
        <Fabrica />
        <Detalle />
      </div>
    );
  }
}

export default App;
