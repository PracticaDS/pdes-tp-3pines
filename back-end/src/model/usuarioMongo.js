import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String
});

module.exports = mongoose.model('Usuario', usuarioSchema)