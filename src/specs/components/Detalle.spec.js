import React from 'react'
import { shallow } from 'enzyme'
import { Detalle } from '../../components/Detalle'
import { Maquina } from '../../models/Maquina';
import '../../setupTests.js'

describe('<Toolbox />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<Detalle />)

  	expect(wrapper.find('.detalle-contenedor')).toHaveLength(1)
  })

  it('tiene una seccion con titulo', () => {
 	let wrapper = shallow(<Detalle />)

  	expect(wrapper.find('.titulo')).toHaveLength(1)
  })

  describe('contenido de los detalles', () => {

    it('tiene una seccion con el contenido de los detalles', () => {
    let wrapper = shallow(<Detalle />)

      expect(wrapper.find('.detalle-contenido')).toHaveLength(1)
    })

    describe('cuando NO tiene maquina asociada', () => {

      it('no aparece el nombre de la maquina que se selecciono', () => {
        let wrapper = shallow(<Detalle />)

        expect(wrapper.find('.nombre-maquina')).toHaveLength(0)
      })

      it('no aparece el costo de la maquina que se selecciono', () => {
        let wrapper = shallow(<Detalle />)

        expect(wrapper.find('.costo-maquina')).toHaveLength(0)
      })

      it('no aparece la frecuencia de la maquina que se selecciono', () => {
        let wrapper = shallow(<Detalle />)

        expect(wrapper.find('.frecuencia-maquina')).toHaveLength(0)
      })
    })

    describe('cuando tiene maquina asociada', () => {

      it('aparece el nombre de la maquina que se selecciono', () => {
        const maquina = crearMaquina()
        let wrapper = shallow(<Detalle maquina={maquina} />)

        expect(wrapper.find('.nombre-maquina')).toHaveLength(1)
        expect(wrapper).toIncludeText(maquina.nombre)
      })

      it('aparece el costo de la maquina que se selecciono', () => {
        const maquina = crearMaquina()
        let wrapper = shallow(<Detalle maquina={maquina} />)

        expect(wrapper.find('.costo-maquina')).toHaveLength(1)
        expect(wrapper).toIncludeText(maquina.costo)
      })

      it('aparece la frecuencia de la maquina que se selecciono', () => {
        const maquina = crearMaquina()
        let wrapper = shallow(<Detalle maquina={maquina} />)

        expect(wrapper.find('.frecuencia-maquina')).toHaveLength(1)
        expect(wrapper).toIncludeText(maquina.frecuencia)
      })
    })
  })
})

function crearMaquina() {
  return new Maquina('Starter', '10', '1')
}
