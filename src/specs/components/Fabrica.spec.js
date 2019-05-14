import React from 'react'
import { shallow } from 'enzyme'
import { Fabrica } from '../../components/Fabrica/Fabrica'
import CeldaContainer from '../../components/Celda/CeldaContainer'
import '../../setupTests.js'
import generarCeldas from '../../reducers/generadorDeCeldas'

describe('<Fabrica />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<Fabrica celdas={[]} />)

  	expect(wrapper.find('.fabrica-contenedor')).toHaveLength(1)
  })

  it('tiene 100 celdas', () => {
 	let wrapper = shallow(<Fabrica celdas={generarCeldas(10, 10)} />)

    expect(wrapper.find(CeldaContainer)).toHaveLength(100)
  })
})
