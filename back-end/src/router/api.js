import { Router } from 'express'
import FabricaApp from '../model/fabrica-app'

const router = Router()
const app = new FabricaApp()

router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.post('/login', (req, res) => {
  const nombre = req.body.nombre

  app.logearUsuario(nombre, (error, response) => {
    res.json({ status: "ok", nombre: nombre })
  })
})

export default router
