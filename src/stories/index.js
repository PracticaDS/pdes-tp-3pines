import React from 'react';
import {storiesOf} from '@storybook/react';
import {Fabrica} from '../components/Fabrica.js'
import {Toolbox} from '../components/Toolbox.js'
import {Detalle} from '../components/Detalle/Detalle';
import {Maquina} from '../models/Maquina';
import '../styles/Fabrica.scss';
import '../styles/Toolbox.scss';
import '../styles/Detalle.scss';
import '../styles/_compartido.scss';
import '../index.css';

storiesOf('Fabrica', module).add('con columnas', () => <Fabrica />);
storiesOf('Toolbox', module).add('con maquinas y acciones', () => <Toolbox />);
storiesOf('Detalle', module).add('vacío', () => <Detalle />)
                            .add('con una máquina', () =>
                              <Detalle maquina={new Maquina('Starter', '10', '1')}/>
                            );
