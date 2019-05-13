import { connect } from 'react-redux';
import { Fabrica } from './Fabrica';
import tick from '../../actions/tick';

const mapStateToProps = (state, ownProps) => ({
  alto: state.fabrica.alto,
  ancho: state.fabrica.ancho,
  celdas: state.fabrica.celdas
});

const doTick = dispatch => {
  setInterval(() => {
    dispatch(tick())
  }, 1000);
}

const mapActionsToProps = (dispatch, ownProps) => ({  
  tick: doTick(dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Fabrica)