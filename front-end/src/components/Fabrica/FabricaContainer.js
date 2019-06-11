import { connect } from 'react-redux'
import { Fabrica } from './Fabrica'
import tick from '../../actions/tick'
import guardarJuego from '../../actions/guardarJuego'


const mapStateToProps = (state, ownProps) => ({
  alto: state.fabrica.alto,
  ancho: state.fabrica.ancho,
  celdas: state.fabrica.celdas,
  nombreUsuario: state.fabrica.usuario.nombre
})

const doTick = dispatch => {
  setInterval(() => {
    dispatch(tick())
  }, 1000)
}

const mapActionsToProps = (dispatch, ownProps) => ({  
  tick: doTick(dispatch),
  guardarJuego: () => dispatch(guardarJuego())
})

export default connect(mapStateToProps, mapActionsToProps)(Fabrica)