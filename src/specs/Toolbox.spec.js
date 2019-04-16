import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Toolbox } from '../components/Toolbox'
import '../setupTest.js'

describe('<Toolbox />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<Toolbox />)

  	expect(wrapper.find('.toolbox-contenedor')).toHaveLength(1)
  })

  it('tiene una seccion con maquinas', () => {
 	let wrapper = shallow(<Toolbox />)

  	expect(wrapper.find('.maquinas-contenedor')).toHaveLength(1)
  })

  it('tiene una seccion con acciones', () => {
 	let wrapper = shallow(<Toolbox />)

  	expect(wrapper.find('.acciones-contenedor')).toHaveLength(1)
  })
})
