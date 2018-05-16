const express  = require ('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'obtener users'
    })
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        mensaje: 'publicar users'
    })
});

router.get('/:usersId',(req,res, next)=>{
    const id = req.params.usersId
});

router.delete('/:usersId',(req,res, next)=>{
    const id = req.params.usersId
    res.status(200).json({
        mensaje: 'publicar users' + id
    })
});


module.exports = router;