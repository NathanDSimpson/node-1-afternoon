const products = require('../products.json');

let getProducts = function(req, res) {
  if (req.query.price){
    console.log("our initial if statement worked")
    let price = parseFloat(req.query.price);
    console.log(price)
    let filteredByPrice = products.filter(product => product.price <= price)
    res.status(200).send(filteredByPrice)
  }else{    
    res.status(200).send(products)
  }
}

let getSingleProduct = function(req, res){
  console.log("this should give us a single product")
  let id = req.params.id;
  let singleProduct = products.filter(product => String(product.id) === String(id))
  if (!singleProduct.length){
    res.status(500).send("Item not in list")
    console.log("Item not in list")
  }else{
    res.status(200).send(singleProduct[0])
  }
}

//The key and value have the same name, so we do not have to type {getProducts: getProducts}
module.exports = {
    getProducts,
    getSingleProduct
  }