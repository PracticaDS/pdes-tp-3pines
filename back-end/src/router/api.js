import { Router } from 'express'
import FabricaApp from '../model/fabrica-app'

const router = Router()
const app = new FabricaApp()

router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.post('/login', async (req, res) => {
  const nombre = req.body.nombre

  const fabrica = await app.logearUsuario(nombre)

  res.json({status: "ok", fabrica})
})

router.post('/fabrica', async (req, res) => {
  const nombre = req.body.usuario.nombre
  const fabrica  = req.body.fabrica
  
  await app.guardarJuego(fabrica, nombre)
  const nuevaFabrica = await app.obtenerJuegoDeUsuario(nombre)
  
  res.json({status: "ok", fabrica: nuevaFabrica})
})

export default router
