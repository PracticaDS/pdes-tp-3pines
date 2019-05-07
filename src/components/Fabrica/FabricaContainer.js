import { connect } from 'react-redux';
import { Fabrica } from "./Fabrica";

const mapStateToProps = (state, ownProps) => ({
  alto: 10,
  ancho: 10,
  celdas: state.fabrica.celdas
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Fabrica)