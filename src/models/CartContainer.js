const { Container } = require('./Container');

class CartContainer extends Container {
    constructor() {
        super('./src/data/cart.json');
        let carts = this.getAll();
        this.id = (carts.length > 0) ? carts.length + 1 : 1;
    }

    save(name, description) {
        let carts = this.getAll();
        let cart = { id: this.id, timestamp: Date.now(), name: name, description: description, products: []}
        carts.push(cart);
        this.saveInFile(carts);
        this.id++;

        return cart;
    }

    getAll() {
        let carts = this.getContentFile();
        return carts;
    }

    addProductsToCart(id, addedProducts) {
        let carts = this.getAll();
        let cartUpdated;
        if (carts.length) {
            cartUpdated = carts.find(elem => elem.id == id);
            if (cartUpdated) {
                cartUpdated.products = cartUpdated.products.concat(addedProducts);
            }
            this.saveInFile(carts);
        }
        return cartUpdated;
    }

    getAllProductsByCartId(id) {
        let carts = this.getAll();
        let cartExists = carts.find(elem => elem.id == id);
        let products = [];
        if (!cartExists) {
            return false;
        } else {
            products = cartExists.products;
        }
        return products;
    }

    deleteById(id) {
        let carts = this.getAll();
        let cartExists = carts.find(elem => elem.id == id);
        if (cartExists) {
            // Remove cart
            let updatedCarts = carts.filter(elem => elem.id != id);
            this.saveInFile(updatedCarts);
        }
        return cartExists;
    }
    
    deleteProductFromCart(id, productId) {
        let carts = this.getAll();
        let cartExists = carts.find(elem => elem.id == id);
        if (cartExists) {
            cartExists.products = cartExists.products.filter(product => product.id !== productId);
            this.saveInFile(carts);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = { CartContainer }