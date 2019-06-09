import { Router } from 'express'
import mongoose from 'mongoose'
import FabricaApp from '../model/fabrica-app';
import Usuario from '../model/usuarioMongo';

const router = Router()
const applicacion = new FabricaApp()


router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.get('/:usuario', (req, res) => {
   Usuario.findOneAndUpdate({nombre: req.params.usuario}, {nombre: req.params.usuario}, {upsert: true, new:true})
       .exec()
       .then(doc => res.status(200).json({status: 'ok', usuario:doc }))
       .catch(error => res.status(500).json({error: error}))
})

export default router
