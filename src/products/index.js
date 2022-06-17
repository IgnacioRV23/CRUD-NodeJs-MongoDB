const express = require('express');

const router = express.Router();

const {ProductsController} = require("./controller");

module.exports.ProductsAPI = (app) => {
    router
    .get("/", ProductsController.getProducts)
    .post("/", ProductsController.createProduct);

    app.use("/api/products", router);
};