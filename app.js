const express = require('express');
const app = express();
const path = require('path');
const morgan  = require('morgan');

//settings
app.set('views',path.join(__dirname,'api/views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');


const rutaNoticias = require('./api/routes/noticias');
const rutaMensajes = require('./api/routes/mensajes');
const rutaComentarios = require('./api/routes/comentarios');
const rutaPublicacions = require('./api/routes/publicaciones');
const rutaIndex = require('./api/routes/index');
const rutaBackoffice = require('./api/routes/backoffice');
const rutaUsers = require('./api/routes/users');

//app.use(morgan('dev'));



app.use('/noticias', rutaNoticias);
app.use('/mensajes', rutaMensajes);
app.use('/comentarios', rutaComentarios);
app.use('/publicaciones', rutaPublicacions);
app.use('/backoffice', rutaBackoffice);
app.use(rutaIndex);
app.use('/users', rutaUsers);

module.exports = app;