const express = require('express');
const { Router } = express;
const cartRouter = Router();

const { ProductContainer } = require('../models/ProductContainer');
const { CartContainer } = require('../models/CartContainer');

let productContainer = new ProductContainer();
let cartContainer = new CartContainer();

cartRouter.get('/', (req, res) => {
    let products = cartContainer.getAll();

    res.json({products: products});
});

cartRouter.post('/', (req, res) => {
    let product = req.body;

    if (product && product.name && product.description) {
        product = cartContainer.save(product.name, product.description);
        res.json({result: 'product saved', product: product});
    } else {
        res.json({result: 'product cannot saved'});
    }
});

cartRouter.post('/:id/products', (req, res) => {
    let productId = req.params.id;
    let product = CartContainer.getById(req.body.id);

    if (productId && product) {
        let product = cartContainer.addProductToCart(productId, product);
        
        res.json({result: 'product added to cart', product: product});
    } else {
        res.json({result: 'player cannot be added'});
    }
});

module.exports = cartRouter;