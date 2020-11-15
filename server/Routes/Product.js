const router = require("express").Router();

const Product = require("../Controller/Product");

router.post("/product", Product.create);

router.get("/product", Product.findAll);

router.get("/product/:id", Product.findOne);

router.put("/product/:id", Product.update);

router.delete("/product/:id", Product.delete);

module.exports = router;
