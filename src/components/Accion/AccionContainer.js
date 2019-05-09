import seleccionarAccion from '../../actions/seleccionarAccion';
import { connect } from 'react-redux';
import Accion from './Accion';

function obtenerImagen(state, ownProps) {
  return state.acciones.accionSeleccionada === ownProps.accion.nombre ?
    ownProps.accion.imagenActivaUrl :
    ownProps.accion.imagenInactivaUrl;
}

const mapStateToProps = (state, ownProps) => ({
  imagen: obtenerImagen(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  seleccionarImagen: () => {
    debugger
    dispatch(seleccionarAccion(ownProps.accion.nombre))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Accion)
