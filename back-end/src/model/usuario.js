import mongoose from 'mongoose'

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: {
    type: String,
    required: [true, 'Necesitas un nombre para poder crear un usuario'],
    unique: true
  },
});

schema.statics.buscarOCrearPorNombre = function(nombre, callback) {
  return this.model('Usuario').findOneAndUpdate({ nombre: nombre }, { nombre: nombre }, { upsert: true, new: true, useFindAndModify: false }, callback);
}

export default mongoose.model('Usuario', schema)