const express = require('express');

const PORT = 8080;

const app = express();


const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto " + server.address().port);
});