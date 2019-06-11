import '../setup'
import FabricaApp from "../../src/model/fabrica-app"
import Fabrica from "../../src/model/fabrica"

describe('FabricaApp', () => {
  let app

  beforeEach(() => {
    app = new FabricaApp()
  })

  describe('logearUsuario', () => {
    it('si el usuario existe no lo crea', async () => {
      await app.logearUsuario('Pepe', (err, res) => {})
      let usuarios = await Fabrica.find()
      expect(usuarios.length).toEqual(1)
  
      await app.logearUsuario('Pepe', (err, res) => {})
      usuarios = await Fabrica.find()
      expect(usuarios.length).toEqual(1)
      })

    it('si el usuario no existe lo crea', async () => {
      let usuarios = await Fabrica.find()
      expect(usuarios.length).toEqual(0)

      await app.logearUsuario('Pepe', (err, res) => {})
      usuarios = await Fabrica.find()
      expect(usuarios.length).toEqual(1)
    })
  })
})
