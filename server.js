const express = require('express');

const app = express();
const productRouter = require('./src/routes/ProductRoutes');
const cartRouter = require('./src/routes/CartRoutes');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));

app.listen(8080, () => {
    console.log('Server on port 8080');
})