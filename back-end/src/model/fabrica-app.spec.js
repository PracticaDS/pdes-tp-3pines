import FabricaApp from "./fabrica-app";
import Usuario from "./usuario";

describe('FabricaApp', () => {
  let app

  beforeEach(() => {
    app = new FabricaApp()
  })

  describe('logearUsuario', () => {
    let usuarioPepe

    beforeEach(() => {
      usuarioPepe = new Usuario('Pepe')
    })
  
    it('logea al usuario', () => {
      app.logearUsuario(usuarioPepe.nombre)

      expect(app.usuarios.length).toEqual(1)
      expect(app.usuarios[0]).toEqual(usuarioPepe)
      expect(app.usuariosLogeados.length).toEqual(1)
      expect(app.usuariosLogeados[0]).toEqual(usuarioPepe)
    })

    it('si el usuario existe no lo crea', () => {
      app.logearUsuario(usuarioPepe.nombre)
      expect(app.usuarios.length).toEqual(1)

      app.logearUsuario(usuarioPepe.nombre)

      expect(app.usuarios.length).toEqual(1)
      expect(app.usuarios[0]).toEqual(usuarioPepe)
      expect(app.usuariosLogeados.length).toEqual(1)
      expect(app.usuariosLogeados[0]).toEqual(usuarioPepe)
    })

    it('si el usuario no existe lo crea', () => {
      expect(app.usuarios.length).toEqual(0)

      app.logearUsuario(usuarioPepe.nombre)

      expect(app.usuarios.length).toEqual(1)
      expect(app.usuarios[0]).toEqual(usuarioPepe)
      expect(app.usuariosLogeados.length).toEqual(1)
      expect(app.usuariosLogeados[0]).toEqual(usuarioPepe)
    })
  })
})
