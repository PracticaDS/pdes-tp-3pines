import { connect } from 'react-redux';
import { Detalle } from './Detalle';
import { MAQUINAS } from '../../constantes';

function obtenerMaquina(state) {
  return MAQUINAS.find(maquina => maquina.nombre === state.acciones.accionSeleccionada);
}

const mapStateToProps = (state, ownProps) => ({
  maquina: obtenerMaquina(state)
})

export default connect(mapStateToProps)(Detalle)
