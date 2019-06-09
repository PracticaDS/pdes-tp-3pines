import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: {
        type: String,
        required: [true, 'Necesitas un nombre para poder crear un usuario'],
        unique: true
    },
});

module.exports = mongoose.model('Usuario', usuarioSchema)