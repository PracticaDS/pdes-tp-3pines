import React from 'react';
import '../styles/Toolbox.scss';
import '../styles/_compartido.scss';
import {connect} from 'react-redux';
import seleccionarAccion from '../actions/seleccionarAccion';

const mapStateToProps = (state, ownProps) => ({
  imagen: ownProps.nombre === state.acciones.accionSeleccionada ? ownProps.imagenActiva : ownProps.imagenInactiva
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  seleccionarImagen: () => dispatch(seleccionarAccion(ownProps.nombre))
})

const Accion = ({seleccionarImagen, imagen, nombre}) => {
  return (
    <div onClick={seleccionarImagen}>
      <img src={imagen} alt={nombre} className="accion"/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Accion)
