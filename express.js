const { Console } = require('console');
const express = require('express');

const app = express();
const PORT = 8080;
let cantidaVisitas = 0;

const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto 8080");
})

server.on("Error", error => console.log('Se tiene el siguiente error : ${error}'));

app.get('/', (req, resp) => {
    resp.send({mensaje: 'Hola mundo!'});
})

app.get('/visitas', (req, resp) => {
    cantidaVisitas++;
    resp.send({cantidad: cantidaVisitas});
})

app.get('/hola', (req, resp) => {
    resp.send({mensaje: 'Hola tomas!'});
})

