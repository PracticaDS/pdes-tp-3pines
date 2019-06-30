import mongoose, {Schema} from 'mongoose'

const Maquina = new Schema({
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

const Celda = new Schema({maquina: Maquina,  seleccionada: Boolean, materia: Number, x: Number, y: Number});

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
  ganancia: {
    type: Number
  },
});

schema.statics.guardarJuego = async function(fabrica, nombreUsuario) {
  const query = { nombreUsuario }
  const res = await this.model('Fabrica').update(query, fabrica).exec()
}

schema.statics.obtenerJuegoDeUsuario = async function(nombreUsuario) {
  return await this.model('Fabrica').findOne({nombreUsuario}).exec()
}

schema.statics.logearUsuario = async function(nombreUsuario) {
  const fabricaInicial = {
    ancho: 10,
    alto: 10,
    celdas: [], // TODO: generar lista de celdas.
    ganancia: 0,
    nombreUsuario: nombreUsuario
  }
  const query = { nombreUsuario }
  const options = { upsert: true, new: true, useFindAndModify: false }
  return await this.model('Fabrica').findOneAndUpdate(query, fabricaInicial, options).exec()
}

export default mongoose.model('Fabrica', schema)