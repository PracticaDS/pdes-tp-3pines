import React from 'react'
import { shallow } from 'enzyme'
import { Toolbox } from '../../components/Toolbox'
import { ACCIONES, MAQUINAS } from '../../constantes'
import '../../setupTests.js'

describe('<Toolbox />', () => {
  describe('Secciones del Toolbox', () => {

    it('cuando se clickea una acción esta se pone activa', () => {
      let wrapper = shallow(<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>)

      let imagenMaquinaStarter = wrapper.find({alt: 'Starter'});

      // TODO:
      // expect(imagenMaquinaStarter.prop("src")).toEqual('/icons/starter.svg');
      // imagenMaquinaStarter.simulate('click');
      // expect(imagenMaquinaStarter.prop("src")).toEqual('/icons/starter-activo.svg');
    })
  })
})
