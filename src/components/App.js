import React, { Component } from 'react';
import '../styles/App.css';
import { Fabrica } from './Fabrica.js'
import { Toolbox } from './Toolbox.js'
import { Detalle } from './Detalle';

class App extends Component {
  render() {
    return (
      <div className="app-contenedor">
      	<Toolbox />
        <Fabrica />
        <Detalle maquina={{nombre: 'Starter', costo: '800', frecuencia: 1}}/>
      </div>
    );
  }
}

export default App;
