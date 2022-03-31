
const fs = require('fs');


const data = fs.readFileSync('./package.json','utf-8');
// lee el archivo package.json

const productosAJson = JSON.parse(data);
//parseo el array de package Json

const productosID=productosAJson.productos[0].id;


class Contenedor {
    constructor (name, price, id)
    {this.name= name;
     this.price=price;
     this.id=id;
    }

    save(a){
    let nuevoID =this.id ++
    let parametroJSON = a;
    console.log("id" + nuevoID);
    const save = fs.appendFileSync('./package.json',JSON.stringify(parametroJSON))
    }

}
const nuevoObjeto1 = new Contenedor("cocina","1299", productosID)
const nuevoObjeto2 = new Contenedor("Microondas","2299", productosID)
const nuevoObjeto3 = new Contenedor("Termo","299", 1)


nuevoObjeto1.save(nuevoObjeto1);
nuevoObjeto1.save(nuevoObjeto1);



