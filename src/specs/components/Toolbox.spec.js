import React from 'react'
import { shallow, mount  } from 'enzyme'
import { Toolbox } from '../../components/Toolbox'
import { ACCIONES, MAQUINAS } from '../../constantes'
import '../../setupTests.js'

describe('<Toolbox />', () => {
  it('se monta como corresponde', () => {
 	  let wrapper = shallow(<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>)

  	expect(wrapper.find('.toolbox-contenedor')).toHaveLength(1)
  })

  describe('Secciones del Toolbox', () => {

    it('tiene dos secciones con titulos', () => {
      let wrapper = shallow(<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>)

      expect(wrapper).toContainMatchingElements(2, '.titulo')
      expect(wrapper).toIncludeText('Máquinas')
      expect(wrapper).toIncludeText('Edición')
    })

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
