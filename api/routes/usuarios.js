const express  = require ('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const checkAuth = require('../middleware/check-auth');

router.get('/',(req, res, next)=> {
    Usuario.find()
    .select("_id nombre correo imagenUrl")
    .exec()
    .then(docs => {
        const response ={
            count: docs.length,
            Usuarios :docs.map(doc => {
                return {
                    _id: doc._id,
                    nombre: doc.nombre,
                    correo: doc.correo,
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


router.post('/registrar',(req, res, next) => {
    Usuario.find({correo:req.body.correo})
    .exec()
    .then(usuario => {
        if (usuario.length >=  1){
            return res.status(422).json({
                message: 'El correo ya esta registrado'
            });
        }else{
            bcrypt.hash(req.body.contraseña,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error: err
                    });
                }else{
                    const usuario = new Usuario({
                        _id: new mongoose.Types.ObjectId,
                        correo: req.body.correo,
                        contraseña: hash,
                        nombre: req.body.nombre,
                        imagenUrl: req.body.imagenUrl
                    });
                    usuario.save()
                    .then(result => {
                        console.log(result);
                        res.status(200).json({
                            message: 'El usuario ha sido creado'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                           error: err 
                        })
                    });
                }
            })      
        }
    })
});

router.post('/verificar',checkAuth,(req, res, next) => {
    res.status(201).json({
        message: 'Token valido',
        token : req.params.token
    });
});



router.post('/Iniciarsesion',(req, res, next)=> {
    Usuario.find({correo: req.body.correo})
    .exec()
    .then(user =>{
        if(user.length< 1){
            return res.status(401).json({
                message: 'Autentifiacion fallida'
            });
        }
        bcrypt.compare(req.body.contraseña,user[0].contraseña,(err,result)=>{
            if(err){
                return res.status(400).json({
                    message: 'Autentifiacion fallida'
                });
            }
            if(result){
                const token = jwt.sign({
                    email: user[0].correo,
                    userId: user[0]._id,
                    name: user[0].nombre,
                },
               "secret",
            {
                expiresIn:"10d"
            }
        );
               return res.status(200).json({
                   message: 'Autentifiacion exitosa',
                   name: user[0].name,
                   userId: user[0]._id,                   
                   token: token
               })
            }
            return res.status(400).json({
                message: 'Autentifiacion fallida'
            });
        });

    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
           error: err 
        })
    });
});

//Actualizar foto de perfil 
router.patch('/img/:Idusuario',(req, res, next)=> {
    const id = req.params.Idusuario;
    const updateOps = {};
    Usuario.update({ _id: id },{ imagenUrl: req.body.value})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Sucesfull'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
           error: err 
        });    
    }); 
});


module.exports = router;