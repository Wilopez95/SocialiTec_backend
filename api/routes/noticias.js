const express  = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const Noticia = require('../models/noticia');

router.get('/',(req, res, next)=> {
    Noticia.find()
    .select("_id titulo texto imagenUrl")
    .exec()
    .then(docs => {
        const response ={
            count: docs.length,
            Usuarios :docs.map(doc => {
                return {
                    _id: doc._id,
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
    const noticia = new Noticia({   
        _id: new mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        texto: req.body.texto,
        imagenUrl: req.body.imagenUrl
    });
    noticia
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Sucesfull',
            noticia: {
                    _id: result._id,
                    titulo: result.titulo,
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