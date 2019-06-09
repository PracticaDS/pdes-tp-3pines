import Usuario from '../model/usuarioMongo';

class FabricaApp {
  constructor() {
  }
  
  logearUsuario(nombreDeUsuario, onSuccess, onError) {
    Usuario.findOneAndUpdate({nombre: nombreDeUsuario}, {nombre: nombreDeUsuario}, {upsert: true, new:true})
        .exec()
        .then(doc => {
            onSuccess()
            console.log('Usuario loggeado: ' , nombreDeUsuario)
        })
        .catch(error => {
            onError()
            console.log('Se produjo un error')
        })
  }
}

export default FabricaApp