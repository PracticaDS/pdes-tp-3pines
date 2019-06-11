import mongoose from 'mongoose'
import Celda from 'celda'

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ancho: {
        type: Number,
    },
    alto: {
        type: Number
    },
    celdas: {
        type: [Celda]
    },
    ganacia: {
        type: Number
    },
});


export default mongoose.model('Fabrica', schema)