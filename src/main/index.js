const express = require('express');

module.exports.IndexAPI = (app) => {
    const router = express.Router();
    router.get("/", (req, res) => {
        const menu = {
            products:`http://${req.headers.host}/api/products`
        };
        res.status(200).json({menu});
    });
    app.use("/", router);
};

module.exports.NotFoundAPI = (app) => {
    const router = express.Router();
    router.all("*", (req, res) => {
        res.status(404).json({message:"Not Found"});
    });
    app.use("/", router);
};