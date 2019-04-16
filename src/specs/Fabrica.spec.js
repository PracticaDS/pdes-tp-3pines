import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Fabrica, Celda } from '../components/Fabrica'
import '../setupTest.js'

describe('<Fabrica />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<Fabrica />)

  	expect(wrapper.find('.fabrica-contenedor')).toHaveLength(1)
  })

  it('tiene 100 celdas', () => {
 	let wrapper = shallow(<Fabrica />)

  	expect(wrapper.find(Celda)).toHaveLength(100)
  })
})
