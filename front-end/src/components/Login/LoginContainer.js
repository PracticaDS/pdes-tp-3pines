import { connect } from 'react-redux';
import Login from './Login';
import logearUsuario from '../../actions/loggearUsuario';
import setUsuario from '../../actions/setUsuario';

const mapStateToProps = (state, ownProps) => ({
  usuario: ownProps.usuario,
});
const method = (dispatch, usuario) => {
  dispatch(setUsuario(usuario))
} 

const mapActionsToProps = (dispatch, ownProps) => ({
  setearUsuario: (usuario) => method(dispatch, usuario),
  login: () => dispatch(logearUsuario())
});

export default connect(mapStateToProps, mapActionsToProps)(Login)