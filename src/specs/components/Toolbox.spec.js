import React from 'react'
import { shallow  } from 'enzyme'
import { Toolbox } from '../../components/Toolbox'
import { ACCIONES, MAQUINAS } from '../../Constantes';
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

    it('en total tiene 8 acciones', () => {
      let wrapper = shallow(<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>)

      expect(wrapper).toContainMatchingElements(8, '.accion')
      expect(wrapper).toContainMatchingElements(8, 'img')
    })

    it('cuando se clickea una acción esta se pone activa', () => {
      let wrapper = shallow(<Toolbox maquinas={MAQUINAS} acciones={ACCIONES}/>)

      let imagenMaquinaStarter = wrapper.find({alt: 'Starter'});

      expect(imagenMaquinaStarter.prop("src")).toEqual('/icons/starter.svg');
      imagenMaquinaStarter.simulate('click');
      expect(imagenMaquinaStarter.prop("src")).toEqual('/icons/starter-activo.svg');
    })
  })
})
