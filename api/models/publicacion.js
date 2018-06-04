const mongoose = require('mongoose');


const publicacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    autorId: {type: mongoose.Schema.Types.ObjectId , ref: 'Usuario' ,required: true},
    titulo: {type: String, required: true},
    texto: {type: String, required: true},
    imagenUrl: {type: String, default: null}

});

module.exports = mongoose.model('Publicaciones',publicacionSchema);