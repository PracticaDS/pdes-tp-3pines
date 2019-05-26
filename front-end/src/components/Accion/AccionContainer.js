import seleccionarAccion from '../../actions/seleccionarAccion';
import { connect } from 'react-redux';
import Accion from './Accion';

const obtenerImagen = (state, ownProps) => {
  return state.acciones.accionSeleccionada.nombre === ownProps.accion.nombre ?
    ownProps.accion.imagenActivaUrl :
    ownProps.accion.imagenInactivaUrl;
}

const mapStateToProps = (state, ownProps) => ({
  imagen: obtenerImagen(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  seleccionarImagen: () => dispatch(seleccionarAccion(ownProps.accion))
})

export default connect(mapStateToProps, mapDispatchToProps)(Accion)
