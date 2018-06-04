const mongoose = require('mongoose');


const noticiaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: {type: String, required: true},
    texto: {type: String, required: true},
    imagenUrl: {type: String, default: null}

});

module.exports = mongoose.model('Noticia',noticiaSchema);