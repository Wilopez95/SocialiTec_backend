const express  = require ('express');
const router = express.Router();
const moongose = require('mongoose');

const Mensaje = require('../models/mensaje');


router.post('/',(req, res, next) => {
    const mensaje = new Mensaje({
        _id: new moongose.Types.ObjectId(),
        emisor: req.body.emisor,
        destinatario: req.body.destinatario,
        mensaje: req.body.mensaje,
    });
    mensaje.save().then(result=>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        mensaje: "Se ha creado el nuevo post de mensaje",
        mensajeenviado: mensaje
    })
});

router.get('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'obtener mensajes'
    })
});

router.get('/:mensajesId',(req,res, next)=>{
    const id = req.params.mensajesId
    Mensaje.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:mensajesId',(req,res, next)=>{
    const id = req.params.mensajesId
    res.status(200).json({
        mensaje: 'publicar mensajes' + id
    })
});


module.exports = router;