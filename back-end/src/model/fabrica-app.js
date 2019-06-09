import Usuario from "./usuario";

class FabricaApp {
  constructor() {
    this.usuarios = []
    this.usuariosLogeados = []
  } 
  
  logearUsuario(nombreDeUsuario) {
    const usuario = new Usuario(nombreDeUsuario)
    const usuarioExiste = this.usuarios.some(u => u.nombre === nombreDeUsuario)
    const usuarioEstaLoggeado = this.usuariosLogeados.some(u => u.nombre === nombreDeUsuario)
    
    if (!usuarioExiste) {
      console.log('Nuevo usuario creado: ', nombreDeUsuario)
      this.usuarios.push(usuario)
    }
    if (!usuarioEstaLoggeado) {
      console.log('Nuevo usuario logeado: ', nombreDeUsuario)
      this.usuariosLogeados.push(usuario)
    }
  }
}

export default FabricaApp