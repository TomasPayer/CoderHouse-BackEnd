const express = require('express');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en puerto 8080");
});

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


//GET
app.get('/', (req, resp) => {
    resp.send({mensaje: 'Ruta de Inicio'});
})

app.get('/api/productos', (req, resp) => {
    let productos = [{nombre:'heladera', precio:100, id:5}, {nombre:'heladera2', precio:200, id:6}];
    //contenedor --> getById(req.params.id)

    if(Object.entries(req.query).length > 0) {
        resp.json({
        result: 'geat all WITH params',
        productos: productos,
        query: req.query
    });
    } else {
      resp.json({
           result: 'get all without params',
           productos: productos
        });
       }
      })

      app.get('/api/productos/:id', (req, resp) => {
        let productos = [{nombre:'heladera', precio:100, id:5}, {nombre:'heladera2', precio:200, id:6}];
        //contenedor --> getById(req.params.id)
    
            resp.json({
            result: 'geat product by id',
            producto: productos[req.params.id],
            id: req.params.id
        });
    })
    

      //POST (no tiene id)
      app.post('/api/productos', (req, resp) => {
          //logica let NewProduct = req.body
        resp.json({
            result: 'Save product',
            body: req.body
        });
    })


    //PUT
      app.put('/api/productos/:id', (req, resp) => {
        //let productos = [{nombre:'heladera', precio:100}, {nombre:'heladera2', precio:200}];
        //logica
            resp.json({
            result: 'edit by id',
            id: req.params.id,
            body: req.body
        });
    })

           //DELETE
    app.delete('/api/productos/:id', (req, resp) => {
        //let productos = [{nombre:'heladera', precio:100}, {nombre:'heladera2', precio:200}];
        //logica
            resp.json({
            result: 'edit by id',
            id: req.params.id,
        });
    })


         //EJERCICIO DE PRACTICA
      const frase = 'Hola mi nombre es Tomas Payer'

      app.get('/api/frase', (req, resp) => {
          resp.json({
              resul: 'Se devuelve la frase',
              frase: frase
          })
      })

