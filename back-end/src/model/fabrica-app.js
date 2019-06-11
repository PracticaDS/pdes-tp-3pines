import Usuario from './usuario';
import Fabrica from './fabrica'

class FabricaApp {
  constructor() {}
  
  logearUsuario(nombreDeUsuario) {
    return Fabrica.logearUsuario(nombreDeUsuario)
  }

  guardarJuego(fabrica, usuario, callback){
    Fabrica.guardarJuego(fabrica, usuario, callback)
  }

  obtenerJuegoDeUsuario(usuario){
    return Fabrica.obtenerJuegoDeUsuario(usuario)
  }
}

export default FabricaApp