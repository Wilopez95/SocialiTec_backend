const express  = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const Mensaje = require('../models/mensaje');



router.get('/:UsuarioId',(req, res, next)=>{
    const id = req.params.UsuarioId;
    Mensaje.find({destinatario:id})
    .select("_id emisor mensaje")
    .exec()
    .then(result=>{
        if(result.length<1){
            return res.status(401).json({
            message: 'No hay mensajes para este usuario'
            });
        }else{
            return res.status(201).json({
            message: 'Sucesfull',
            result
            });
        }
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({ error: err });
    });

    
});


//Postear un nuevo mensaje
router.post('/',(req, res, next) => {
    const mensaje = new Mensaje({
        _id: new mongoose.Types.ObjectId(),
        emisor: req.body.emisorId,
        destinatario: req.body.destinatarioId,
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


module.exports = router;