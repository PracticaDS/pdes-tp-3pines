import mongoose from 'mongoose'
import Maquina from 'maquina'

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    maquina: {
        type: Maquina,
    },
    materia: {
        type: Number
    },
    seleccionada: {
        type: Boolean
    },
    x: {
        type: Number
    },
    y: {
        type: Number
    }
});


export default mongoose.model('Celda', schema)