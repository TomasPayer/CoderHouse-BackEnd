const express = require('express');
const { Router } = express;
const cartRouter = Router();

const { ProductContainer } = require('../models/ProductContainer');
const { CartContainer } = require('../models/CartContainer');

let productContainer = new ProductContainer();
let cartContainer = new CartContainer();

// POST api/cart
cartRouter.post('/', (req, res) => {
    let cart = req.body;

    if (cart && cart.name && cart.description) {
        cart = cartContainer.save(cart.name, cart.description);
        res.json({result: 'cart saved', cart: cart});
    } else {
        res.json({result: 'cart cannot be saved'});
    }
});


// GET api/cart/:id/products
cartRouter.get('/:id/products', (req, res) => {
    let cartProducts = cartContainer.getAllProductsByCartId();
    if (cartProducts) {
        res.json({result: 'cart found', products: products}); 
    } else {
        res.status(400).json({"error": "cart not found"})
    }
});

// POST api/cart/:id/products
cartRouter.post('/:id/products', (req, res) => {
    let cartId = req.params.id;
    let products = req.body.products;

    if (cartId && products.length) {
        let cart = cartContainer.addProductsToCart(cartId, products);
        res.status(200).json({result: 'products added to cart id: ' + cart.id, products: cart.products});
    } else {
        res.status(400).json({result: 'products cannot be added'});
    }
});

// DELETE api/cart/:id
cartRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const wasDeleted = cartContainer.deleteById(id);
    
    wasDeleted 
        ? res.status(200).json({"success": "cart successfully removed"})
        : res.status(404).json({"error": "cart not found"})
});

// DELETE api/cart/:id/:productId
cartRouter.delete('/:id/:productId', (req, res) => {
    const { id, productId } = req.params;
    const wasDeleted = cartContainer.deleteProductFromCart(id, productId);
    
    wasDeleted 
        ? res.status(200).json({"success": "product successfully removed from cart"})
        : res.status(404).json({"error": "cart not found"})
});

module.exports = cartRouter;