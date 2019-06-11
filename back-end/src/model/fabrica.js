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

schema.statics.guardarJuego = async function(fabrica, usuario, callback) {
    return await this.model('Fabrica')
        .findOneAndUpdate({ nombreUsuario: usuario.nombre },
            {
                ancho: fabrica.ancho,
                alto: fabrica.alto,
                celdas: fabrica.celdas,
                ganancia: fabrica.ganancia
            } , { upsert: true, new: true, useFindAndModify: false })
        .exec();
}

schema.statics.obtenerJuegoDeUsuario = async function(usuario) {
    return await this.model('Fabrica')
        .find({nombreUsuario: usuario})
        .exec()
}

schema.statics.logearUsuario = async function(nombreUsuario) {
    // TODO: enviar fabricaInicial para guardar al crear.
    // const fabricaInicial = {
    //     ancho: 10,
    //     alto: 10,
    //     celdas: [], // TODO: generar lista de celdas.
    //     ganancia: 0,
    //     nombreUsuario: nombreUsuario
    // }
    return await this.model('Fabrica')
        .findOneAndUpdate({ nombreUsuario: nombreUsuario }, { nombreUsuario: nombreUsuario }, { upsert: true, new: true, useFindAndModify: false })
        .exec()
}


export default mongoose.model('Fabrica', schema)