import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { Fabrica } from '../components/Fabrica'
import { shallow, mount, render } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('se monta como corresponde', () => {
 	let wrapper = shallow(<App />)

  	expect(wrapper.find('.app-contenedor')).toHaveLength(1)
  })

  it('tiene 1 fabrica', () => {
 	let wrapper = shallow(<App />)

  	expect(wrapper.find(Fabrica)).toHaveLength(1)
  })
})
