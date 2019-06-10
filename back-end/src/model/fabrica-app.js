import Usuario from './usuario';

class FabricaApp {
  constructor() {}
  
  logearUsuario(nombreDeUsuario, callback) {
    Usuario.buscarOCrearPorNombre(nombreDeUsuario, callback)
  }
}

export default FabricaApp