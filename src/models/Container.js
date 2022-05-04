const fs = require('fs');

class Container {
    constructor(fileName) {
        this.fileName = fileName;
    }

    saveInFile(content) {
        fs.writeFileSync(this.fileName, JSON.stringify(content));
    }

    getContentFile() {
        let content = [{nombre:'heladera', precio:100, id:5}, {nombre:'heladera2', precio:102, id:6}];

        try {
            let file = fs.readFileSync(this.fileName, 'utf-8');
            content = JSON.parse(file);
        } catch (error) {
            this.saveInFile(content);
            console.log(`Creacion del archivo ${this.fileName}`);
        }

        return content;
    }
}

module.exports = { Container }