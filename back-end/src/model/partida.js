import mongoose from 'mongoose'
import Fabrica from 'fabrica'
import Usuario from 'usuario'

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombreUsuario: {
        type: String,
    },
    fabrica: {
        type: Fabrica
    },
});


export default mongoose.model('Partida', schema)