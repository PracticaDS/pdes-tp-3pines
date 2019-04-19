import React from 'react'
import { shallow } from 'enzyme'
import { Toolbox } from '../components/Toolbox'
import '../setupTests.js'

describe('<Toolbox />', () => {
  it('se monta como corresponde', () => {
 	  let wrapper = shallow(<Toolbox />)

  	expect(wrapper.find('.toolbox-contenedor')).toHaveLength(1)
  })

  it('tiene dos secciones con titulos', () => {
    let wrapper = shallow(<Toolbox />)

    expect(wrapper.find('.titulo')).toHaveLength(2)

    expect(wrapper).toIncludeText('Máquinas')
    expect(wrapper).toIncludeText('Edición')
  })
})
