import Usuario from './usuario';
import Fabrica from './fabrica'

class FabricaApp {
  constructor() {}
  
  logearUsuario(nombreUsuario) {
    return Fabrica.logearUsuario(nombreUsuario)
  }

  guardarJuego(fabrica, nombreUsuario){
    return Fabrica.guardarJuego(fabrica, nombreUsuario)
  }

  obtenerJuegoDeUsuario(nombreUsuario){
    return Fabrica.obtenerJuegoDeUsuario(nombreUsuario)
  }
}

export default FabricaApp