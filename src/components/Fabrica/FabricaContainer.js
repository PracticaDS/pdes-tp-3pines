import { connect } from 'react-redux';
import { Fabrica } from "./Fabrica";

const mapStateToProps = (state, ownProps) => ({
  alto: state.fabrica.fabrica.alto,
  ancho: state.fabrica.fabrica.ancho,
  celdas: state.fabrica.fabrica.celdas
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Fabrica)