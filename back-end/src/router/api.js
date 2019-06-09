import { Router } from 'express'
import FabricaApp from '../model/fabrica-app';


const router = Router()
const aplicacion = new FabricaApp()


router.get('/', (req, res) => {
  res.json({ status: "ok" })
});

router.post('/login', (req, res) => {
    const nombre = req.body.nombre
    aplicacion.logearUsuario(nombre,
        () => res.json({ status: "ok", nombre: nombre }),
        () => res.status(403))
})

export default router
