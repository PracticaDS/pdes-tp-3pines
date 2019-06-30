import { Router } from 'express'
import FabricaApp from '../model/fabrica-app'
import Fabrica from '../model/fabrica'

const router = Router()
const app = new FabricaApp()

router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.post('/login', async (req, res) => {
  const nombre = req.body.usuario.nombre
  const fabrica = await app.logearUsuario(nombre)
  res.json({status: "ok", fabrica})
})

router.post('/fabrica', async (req, res) => {
  const usuario = req.body.usuario
  const fabrica  = req.body.fabrica
  // TODO: sorround with TRY-CATCH
  await app.guardarJuego(fabrica, usuario)
  res.json({status: "ok"})
})

router.get('/')



export default router
