import '../setup'
import FabricaApp from "../../src/model/fabrica-app"
import Usuario from "../../src/model/usuario"

describe('FabricaApp', () => {
  let app

  beforeEach(() => {
    app = new FabricaApp()
  })

  const expectCantidadDeUsuariosEs = async (cantidadDeUsuariosEsperada) => {
    const usuarios = await Usuario.find({})
    expect(usuarios.length).toEqual(cantidadDeUsuariosEsperada)
  };

  describe('logearUsuario', () => {
    it('si el usuario existe no lo crea', async () => {
      app.logearUsuario('Pepe', (err, res) => {})
      await expectCantidadDeUsuariosEs(1);

      app.logearUsuario('Pepe', (err, res) => {})
      await expectCantidadDeUsuariosEs(1);
    })

    it('si el usuario no existe lo crea', async () => {
      await expectCantidadDeUsuariosEs(0);

      app.logearUsuario('Pepe', (err, res) => {})
      await expectCantidadDeUsuariosEs(1);
    })
  })
})
