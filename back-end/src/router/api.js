import { Router } from 'express'
import FabricaApp from '../model/fabrica-app'
import Fabrica from '../model/fabrica'

const router = Router()
const app = new FabricaApp()

router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.post('/login', (req, res) => {
  const nombre = req.body.usuario.nombre
  app.logearUsuario(nombre)
      .exec()
      .then(fabrica => res.json({status: "ok", fabrica: fabrica}))
})

router.post('/fabrica', (req, res) => {
  const usuario = req.body.usuario
  const fabrica  = req.body.fabrica

  app.guardarJuego(fabrica, usuario, (error, response) => {
    res.json({status: "ok"})
  })
})



export default router
