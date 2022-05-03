const { Container } = require('./Container');

class ProductContainer extends Container {
    constructor() {
        super('./src/data/prodcuts.json');
        let products = this.getAll();
        this.id = (products.length > 0) ? products.length + 1 : 1;
    }

    save(name, number, age) {
        let product = this.getAll();
        let products = {id:this.id, name: name, number: number, age: age}
        prodcuts.push(product);
        this.saveInFile(products);
        this.id++;
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
}

module.exports = { PlayerContainer }