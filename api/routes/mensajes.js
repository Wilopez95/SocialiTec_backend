const express  = require ('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'obtener mensajes'
    })
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'publicar mensajes'
    })
});

router.get('/:mensajesId',(req,res, next)=>{
    const id = req.params.mensajesId
});

router.delete('/:mensajesId',(req,res, next)=>{
    const id = req.params.mensajesId
    res.status(200).json({
        mensaje: 'publicar mensajes' + id
    })
});


module.exports = router;