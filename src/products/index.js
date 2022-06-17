const express = require('express');

const router = express.Router();

const {ProductsController} = require("./controller");

module.exports.ProductsAPI = (app) => {
    router
    .get("/", ProductsController.getProducts)
    .get("/:id", ProductsController.getProduct)
    .post("/", ProductsController.createProduct)
    .post("/update/:id", ProductsController.updateProduct);

    app.use("/api/products", router);
};