const express = require('express');
const app = express();

const rutaNoticias = require('./api/routes/noticias');
const rutaMensajes = require('./api/routes/mensajes');
const rutaComentarios = require('./api/routes/comentarios');
const rutaPublicacions = require('./api/routes/publicaciones');


app.use('/noticias', rutaNoticias);
app.use('/mensajes', rutaMensajes);
app.use('/comentarios', rutaComentarios);
app.use('/publicaciones', rutaPublicacions);

module.exports = app;