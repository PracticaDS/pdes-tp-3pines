import { Router } from 'express'
import FabricaApp from '../model/fabrica-app'

const router = Router()
const app = new FabricaApp()

router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.post('/login', (req, res) => {
  const nombre = req.body.usuario.nombre

  app.logearUsuario(nombre, (error, response) => {
    res.json({ status: "ok", nombre: nombre })
  })
})

router.post('/fabrica', (req, res) => {
  const usuario = req.body.usuario
  const fabrica  = req.body.fabrica

  app.guardarJuego(fabrica, usuario, (error, response) => {
    res.json({status: "ok"})
  })
})

export default router
