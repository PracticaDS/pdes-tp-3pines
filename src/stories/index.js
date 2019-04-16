import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Fabrica } from '../components/Fabrica.js'

storiesOf('Fabrica', module).add('con columnas', () => <Fabrica/>);
