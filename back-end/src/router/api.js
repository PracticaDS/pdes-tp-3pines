import { Router } from 'express'
import mongoose from 'mongoose'
import FabricaApp from '../model/fabrica-app';
import Usuario from '../model/usuarioMongo';

const router = Router()
const applicacion = new FabricaApp()


router.get('/', (req, res) => {
  res.json({ status: "ok" })
})

router.post('/login', (req, res) => {
  const usuario = new Usuario(
      {
          _id: new mongoose.Types.ObjectId(),
          nombre: req.body.usuario
      }
  )
  usuario.save()
      .then(result => console.log(result))
      .catch(error => console.log(error))

  //applicacion.logearUsuario(req.body.usuario)
  res.json({ status: "ok", usuario })
})

export default router
