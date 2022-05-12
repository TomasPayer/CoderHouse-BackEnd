const express = require('express');
const { Router } = express;
const productRouter = Router();

const { ProductContainer } = require('../models/ProductContainer');
let productContainer = new ProductContainer();

const ISADMIN = true;

// GET api/products
productRouter.get('/', (req, res) => {
    let products = productContainer.getAll();
    res.status(200).json({ products: products });
});

// GET api/products/:id
productRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = productContainer.getById(id);
    
    product
        ? res.status(200).json(product)
        : res.status(400).json({"error": "product not found"});
});

// POST api/products
productRouter.post('/', (req, res) => {
    let product = req.body;
    if (ISADMIN) {
        if (product && product.id && product.timestamp && product.name && product.description && product.code && product.image && product.price && product.stock) {
            product = productContainer.save(product.id, product.timestamp, product.name, product.description, product.code, product.image, product.price, product.stock);
            res.json({result: 'product saved', product: product});
        } else {
            res.json({result: 'product cannot saved'});
        }    
    } else {
        res.json({ error : -1, description: 'ruta /api/products método save no autorizado' });
    }
});

// PUT api/products/:id
productRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const product = req.body;
    if (ISADMIN) { 
        const wasUpdated = productContainer.updateById(id, product);
        
        wasUpdated
            ? res.status(200).json({"success" : "product updated"})
            : res.status(404).json({"error": "product not found"})
    } else {
        res.json({ error : -1, description: 'ruta /api/products/:id método update no autorizado' });
    }
});

// DELETE /api/products/:id
productRouter.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    if (ISADMIN) { 
        const wasDeleted = productContainer.deleteById(id);
        
        wasDeleted 
            ? res.status(200).json({"success": "product successfully removed"})
            : res.status(404).json({"error": "product not found"})
    } else {
        res.json({ error : -1, description: 'ruta /api/products/:id método delete no autorizado' });
    }
});

module.exports = productRouter;