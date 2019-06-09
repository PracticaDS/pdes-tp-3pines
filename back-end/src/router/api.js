import { Router } from 'express'
import mongoose from 'mongoose'
import FabricaApp from '../model/fabrica-app';
import Usuario from '../model/usuarioMongo';

const router = Router()
const applicacion = new FabricaApp()


router.get('/', (req, res) => {
  res.json({ status: "ok" })
})

router.get('/:usuario', (req, res) => {
   Usuario.find({nombre: req.params.usuario})
      .exec()
      .then(doc => {
          if(doc.length > 0){
              res.status(200).json(doc)
          }
          else {
              const usuario = new Usuario(
                  {
                      _id: new mongoose.Types.ObjectId(),
                      nombre: req.params.usuario
                  }
              )
              usuario.save().then(response => res.status(200).json(usuario))
          }
      })
      .catch(error => {
          res.status(500).json({error: error})
      })
})

export default router
