import mongoose from 'mongoose'

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    costo: {
        type: Number,
    },
    direccion: {
        type: String
    },
    frecuencia: {
        type: Number
    },
    imagenActivaUrl: {
        type: String
    },
    imagenInactivaUrl: {
        type: String
    }
});


export default mongoose.model('Maquina', schema)