class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Usuario: ${this.nombre} ${this.apellido}.`;
    }

    addmascota(newMascota){
        this.mascotas.push(newMascota);
    }

    getMascotas(){
        return this.mascotas.length;
    }

    addBook(book, autor){
        this.libros.push( {
            "nombre": book,
            "autor": autor
        });
    }

    getBooks(){
        let nombresLibros = []
        this.libros.forEach(item => nombresLibros.push(item.nombre));
        return nombresLibros;
    }
}

let mascotas = ["Perro", "Gato"];
let libros = [
    {
    "nombre": "El señor de los anillos",
    "autor": "Harry Potter"
    },
    {
    "nombre": "Fundacion",
    "autor": "Isaac Asimov"
    }]
//A
let usuario = new Usuario("Tomàs","Payer", libros, mascotas);
console.log(usuario.getFullName());

//B -
usuario.addmascota("Caballo");
usuario.addmascota("Loro");

//C- 
console.log(`Cantidad de Mascotas: ${ usuario.getMascotas() }.`);

//D- deje los ejemplos que nos dio CoderHouse
usuario.addBook("Javascript","El Autor")

//E
console.log(usuario.getBooks());



