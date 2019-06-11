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
    ganacia: {
        type: Number
    },
});

schema.statics.guardarJuego = function(fabrica, usuario, callback) {
    return this.model('Fabrica')
        .findOneAndUpdate({ nombreUsuario: usuario },
            {
                ancho: fabrica.ancho,
                alto: fabrica.alto,
                celdas: fabrica.celdas,
                ganancia: fabrica.ganacia
            } , { upsert: true, new: true, useFindAndModify: false }, callback);
}

export default mongoose.model('Fabrica', schema)