import React from 'react';
import App from '../../components/App';
import { Fabrica } from '../../components/Fabrica'
import { Toolbox } from '../../components/Toolbox';
import { Detalle } from '../../components/Detalle';
import { shallow } from 'enzyme'
import '../../setupTests.js'

describe('<App />', () => {
  it('se monta como corresponde', () => {
 	  let wrapper = shallow(<App />)

  	expect(wrapper.find('.app-contenedor')).toHaveLength(1)
  })

  it('tiene 1 fabrica', () => {
 	  let wrapper = shallow(<App />)

  	expect(wrapper.find(Fabrica)).toHaveLength(1)
  })

  it('tiene 1 toolbox', () => {
    let wrapper = shallow(<App />)

    expect(wrapper.find(Toolbox)).toHaveLength(1)
  })

  it('tiene 1 detalle', () => {
    let wrapper = shallow(<App />)

    expect(wrapper.find(Detalle)).toHaveLength(1)
  })
})
