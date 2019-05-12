import { connect } from 'react-redux';
import Celda from './Celda';
import seleccionarCelda from '../../actions/seleccionarCelda';

const mapStateToProps = (state, ownProps) => ({
  celda: ownProps.celda,
  seleccionada: ownProps.celda.seleccionada,
  maquina: ownProps.celda.maquina
});

const mapActionsToProps = (dispatch, ownProps) => ({
  seleccionar: () => dispatch(seleccionarCelda(ownProps.celda))
});

export default connect(mapStateToProps, mapActionsToProps)(Celda)