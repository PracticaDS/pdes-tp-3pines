import React, { Component } from 'react';
import './App.css';
import { Fabrica } from './Fabrica.js'

class App extends Component {
  render() {
    return (
      <div className="app-contenedor">
        <Fabrica />
      </div>
    );
  }
}

export default App;
