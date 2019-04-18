import React from 'react'
import { shallow } from 'enzyme'
import { Detalle } from '../components/Detalle'
import '../setupTest.js'

describe('<Toolbox />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<Detalle />)

  	expect(wrapper.find('.detalle-contenedor')).toHaveLength(1)
  })

  it('tiene una seccion con titulo', () => {
 	let wrapper = shallow(<Detalle />)

  	expect(wrapper.find('.titulo')).toHaveLength(1)
  })

  it('tiene una seccion con el contenido de los detalles', () => {
 	let wrapper = shallow(<Detalle />)

  	expect(wrapper.find('.detalle-contenido')).toHaveLength(1)
  })
})
