const express = require('express');
const multer = require('multer');
const app = express();
const productRouter = require('./src/routes/ProductRoutes');
const cartRouter = require('./src/routes/CartRoutes');

let storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });
  
  const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));

app.listen(8080, () => {
    console.log('Server on port 8080');
})