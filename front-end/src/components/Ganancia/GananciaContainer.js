import { connect } from 'react-redux';
import Ganancia from './Ganancia';

const mapStateToProps = (state, ownProps) => ({
  ganancia: state.fabrica.ganancia,
  usuario: state.fabrica.usuario.nombre,
});

export default connect(mapStateToProps, null)(Ganancia)