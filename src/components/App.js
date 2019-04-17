import React, { Component } from 'react';
import './App.css';
import { Fabrica } from './Fabrica.js'
import { Toolbox } from './Toolbox.js'

class App extends Component {
  render() {
    return (
      <div className="app-contenedor">
      	<Toolbox />
        <Fabrica />
      </div>
    );
  }
}

export default App;
