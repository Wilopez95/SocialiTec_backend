const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     correo:{type: String,
         required: true,
          unique: true, 
          match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
     contraseña:{type: String, required: true},
     nombre: {type: String, required: true},
     imagenUrl: {type: String, default: null}
});

module.exports = mongoose.model('Usuario',usuarioSchema);