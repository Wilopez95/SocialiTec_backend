const express  = require ('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'obtener comentario'
    })
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'publicar comentario'
    })
});

router.get('/:comentarioId',(req,res, next)=>{
    const id = req.params.comentarioId
});

router.delete('/:comentarioId',(req,res, next)=>{
    const id = req.params.comentarioId
    res.status(200).json({
        mensaje: 'publicar comentario' + id
    })
});


module.exports = router;