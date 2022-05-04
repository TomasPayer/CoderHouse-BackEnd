const { Container } = require('./Container');

class CartContainer extends Container {
    constructor() {
        super('./src/data/cart.json');
        let products = this.getAll();
        this.id = (products.length > 0) ? products.length + 1 : 1;
    }

    save(name, description) {
        let products = this.getAll();
        let product = {id:this.id, name: name, description: description, products: []}
        products.push(product);
        this.saveInFile(products);
        this.id++;

        return product;
    }

    getAll() {
        let products = this.getContentFile();

        return products;
    }

    getById(id) {
        let products = this.getAll();
        let product = null;

        if(products.length > 0) {
            let element = products.find(elem => elem.id == id);
            if(element) {
                product = element;
            }
        }

        return product;
    }

    addProductToCart(productId, product) {
        let products = this.getAll();
        product = null;

        if(products.length > 0) {
            let element = products.find(elem => elem.id == productId);
            if(element) {
                element.players.push(player);
                product = element;
            }

            this.saveInFile(products);
        }

        return team;
    }
}

module.exports = { CartContainer }