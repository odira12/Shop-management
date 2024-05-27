const express = require('express');
const { getAllProducts, addProduct, deleteProduct, sellProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.post('/sell', sellProduct);

module.exports = router;
