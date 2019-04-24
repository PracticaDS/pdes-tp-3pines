import seleccionarAccion from '../../actions/seleccionarAccion';
import { connect } from 'react-redux';
import Accion from './Accion';

function obtenerImagen(state, ownProps) {
  return state.acciones.accionSeleccionada === ownProps.nombre ?
    ownProps.imagenActiva :
    ownProps.imagenInactiva;
}

const mapStateToProps = (state, ownProps) => ({
  imagen: obtenerImagen(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  seleccionarImagen: () => dispatch(seleccionarAccion(ownProps.nombre))
})

export default connect(mapStateToProps, mapDispatchToProps)(Accion)
