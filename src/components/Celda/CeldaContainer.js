import { connect } from 'react-redux';
import Celda from "./Celda";
import seleccionarCelda from "../../actions/seleccionarCelda";

const mapStateToProps = (state, ownProps) => ({
  seleccionada: ownProps.celda.seleccionada,
  maquina: ownProps.celda.maquina
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  seleccionar: () => dispatch(seleccionarCelda(ownProps.celda))
});

export default connect(mapStateToProps, mapDispatchToProps)(Celda)