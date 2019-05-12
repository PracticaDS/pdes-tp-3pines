import { connect } from 'react-redux';
import Ganancia from './Ganancia';

const mapStateToProps = (state, ownProps) => ({
  ganancia: state.fabrica.ganancia,
});

export default connect(mapStateToProps, null)(Ganancia)