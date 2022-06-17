const express = require('express');

const router = express.Router();

const {ProductsController} = require("./controller");

module.exports.ProductsAPI = (app) => {
    router.get("/", ProductsController.getProducts);

    app.use("/api/products", router);
};