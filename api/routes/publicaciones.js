const express  = require ('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'obtener publicacion'
    })
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'publicar publicacion'
    })
});

router.get('/:publicacionId',(req,res, next)=>{
    const id = req.params.publicacionId
});

router.delete('/:publicacionId',(req,res, next)=>{
    const id = req.params.publicacionId
    res.status(200).json({
        mensaje: 'publicar publicacion' + id
    })
});


module.exports = router;