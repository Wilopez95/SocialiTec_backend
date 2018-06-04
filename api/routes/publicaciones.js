const express  = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const Publicacion = require('../models/publicacion');

router.get('/',(req, res, next)=> {
    Publicacion.find()
    .select("_id titulo autorId texto imagenUrl")
    .exec()
    .then(docs => {
        const response ={
            count: docs.length,
            Usuarios :docs.map(doc => {
                return {
                    _id: doc._id,
                    autorId: doc.autorId,
                    titulo: doc.titulo,
                    texto: doc.texto,
                    imagenUrl: doc.imagenUrl,               

                }
           })
        };
            res.status(200).json(response);     
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
});

router.post('/',(req, res, next)=>{
    const publicacion = new Publicacion({   
        _id: new mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        autorId: req.body.autorId,
        texto: req.body.texto,
        imagenUrl: req.body.imagenUrl
    });
    publicacion
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Sucesfull',
            noticia: {
                    _id: result._id,
                    titulo: result.titulo,
                    autor: result.autorid,
                    texto: result.texto,
                    imagenUrl: result.imagenUrl
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
    
});



module.exports = router;