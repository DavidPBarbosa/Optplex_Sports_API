const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controller/itemcontroller');

router.get('/item', itemPedidoController.listarItemPedido );
router.get('/item/:itemID', itemPedidoController.listarItemID );
router.post('/item', itemPedidoController.adicionarItemPedido );
router.put('/item/:itemID', itemPedidoController.atualizarItemPedido );
router.delete('/item/:itemID', itemPedidoController.deletarItemPedido);

module.exports = router;