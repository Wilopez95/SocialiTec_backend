const mongoose = require('mongoose');


const mensajeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emisor: {type: mongoose.Schema.Types.ObjectId , ref: 'Usuario' ,required: true},
    destinatario: {type: mongoose.Schema.Types.ObjectId , ref: 'Usuario' ,required: true},
    mensaje: {type: String, required: true}

});

module.exports = mongoose.model('Mensaje',mensajeSchema);