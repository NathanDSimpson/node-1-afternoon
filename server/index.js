const express = require('express');
const Controller = require('./controller');

const app = express();
const port = 5001;

// we are importing an object, the key "getproducts" has a value of a function
// any function that's used on an express method ('app'will receive req and res as arguments by default
app.get('/api/products', Controller.getProducts)
app.get('/api/product/:id', Controller.getSingleProduct)


app.listen(port, () => {
    console.log(`Our server is listening on port: ${port}`)
})