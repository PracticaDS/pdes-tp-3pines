import React from 'react';
import App from '../components/App';
import { Fabrica } from '../components/Fabrica'
import { shallow, mount, render } from 'enzyme'
import '../setupTest.js'

describe('<App />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<App />)

  	expect(wrapper.find('.app-contenedor')).toHaveLength(1)
  })

  it('tiene 1 fabrica', () => {
 	let wrapper = shallow(<App />)

  	expect(wrapper.find(Fabrica)).toHaveLength(1)
  })
})
