import Usuario from './usuario';
import Fabrica from './fabrica'

class FabricaApp {
  constructor() {}
  
  logearUsuario(nombreDeUsuario, callback) {
    Usuario.buscarOCrearPorNombre(nombreDeUsuario, callback)
  }

  guardarJuego(fabrica, usuario, callback){
    Fabrica.guardarJuego(fabrica, usuario, callback)
  }

  obtenerJuegoDeUsuario(usuario){
    Fabrica.obtenerJuegoDeUsuario(usuario)
  }
}

export default FabricaApp