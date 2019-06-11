import mongoose from 'mongoose'
import Celda from 'celda'

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombreUsuario: {
        type: String
    },
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

schema.statics.guardarJuego = function(fabrica, usuario, callback) {
    return this.model('Fabrica').findOneAndUpdate({ usuario: usuario }, { fabrica: fabrica }, { upsert: true, new: true, useFindAndModify: false }, callback);
}

export default mongoose.model('Fabrica', schema)