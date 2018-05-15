const express  = require ('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'obtener noticias'
    })
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'publicar noticias'
    })
});

router.get('/:noticiasId',(req,res, next)=>{
    const id = req.params.noticiasId
});

router.delete('/:noticiasId',(req,res, next)=>{
    const id = req.params.noticiasId
    res.status(200).json({
        mensaje: 'publicar noticias' + id
    })
});


module.exports = router;