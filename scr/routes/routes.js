const express = require('express');
const router = express.Router();

router.get('/usuario',(req, res) => {
    res.send('Rota do usuario');
});

router.get('/teste',(req, res) =>{
    res.send('Rota de teste');
});

module.exports = router;