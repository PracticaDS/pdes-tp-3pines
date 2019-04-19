import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fabrica } from '../components/Fabrica.js'
import { Toolbox } from '../components/Toolbox.js'
import { Detalle } from '../components/Detalle';
import '../styles/Fabrica.css';
import '../styles/Toolbox.css';
import '../styles/Detalle.css';
import '../styles/_compartido.css';
import '../index.css';

function crearMaquina() {
  return {
    nombre: 'Starter',
    costo: '10',
    frecuencia: '1'
  };
}

storiesOf('Fabrica', module).add('con columnas', () => <Fabrica />);
storiesOf('Toolbox', module).add('con maquinas y acciones', () => <Toolbox />);
storiesOf('Detalle', module).add('vacío', () => <Detalle />)
                            .add('con una máquina', () => <Detalle maquina={crearMaquina()}/>);
