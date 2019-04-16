import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Fabrica } from '../components/Fabrica.js'
import { Toolbox } from '../components/Toolbox.js'

storiesOf('Fabrica', module).add('con columnas', () => <Fabrica />);
storiesOf('Toolbox', module).add('con maquinas y acciones', () => <Toolbox />);