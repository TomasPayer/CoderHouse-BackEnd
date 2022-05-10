const express = require('express');
const { Router } = express;
const productRouter = Router();

const { ProductContainer } = require('../models/ProductContainer');
let productContainer = new ProductContainer();

productRouter.get('/', (req, res) => {
    let products = productContainer.getAll();

    res.json({products: products});
});

// GET api/productos/:id
productRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = productContainer.getById(id);
    
    product
        ? res.status(200).json(product)
        : res.status(400).json({"error": "product not found"})
});

// POST api/productos
productRouter.post('/', (req, res) => {
    let product = req.body;

    if (product && product.id && product.timestamp && product.name && product.description && product.code && product.image && product.price && product.stock) {
        product = productContainer.save(product.id, product.timestamp, product.name, product.description, product.code, product.image, product.price, product.stock);
        res.json({result: 'product saved', product: product});
    } else {
        res.json({result: 'product cannot saved'});
    }
});

// PUT api/productos/:id
productRouter.put('/:id', (req, res, next) => {
    const {id} = req.params;
    const {body} = req;
    const wasUpdated = productContainer.updateById(id,body);
    
    wasUpdated
        ? res.status(200).json({"success" : "product updated"})
        : res.status(404).json({"error": "product not found"})
});

// DELETE /api/productos/:id
productRouter.delete('/:id', (req, res, next) => {
    const {id} = req.params;
    const wasDeleted = productContainer.deleteById(id);
    
    wasDeleted 
        ? res.status(200).json({"success": "product successfully removed"})
        : res.status(404).json({"error": "product not found"})
});

module.exports = productRouter;