import { Router } from 'express'
import FabricaApp from '../model/fabrica-app';

const router = Router()
const app = new FabricaApp()

router.get('/', (req, res) => { 
  res.json({ status: "ok" }) 
})

router.post('/login', (req, res) => {
  const nombre = req.body.usuario
  app.logearUsuario(nombre)
  res.json({ status: "ok", usuario: nombre }) 
})

export default router
