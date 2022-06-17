const express = require('express');

const colors = require('colors');

const {IndexAPI, NotFoundAPI} = require("./src/main/index");

const {ProductsAPI} = require("./src/products/index");

const app = express();

//Settings.
app.use(express.json());
app.set("port", 3000);

//Routers.
IndexAPI(app);
ProductsAPI(app);
NotFoundAPI(app);

//Server.
app.listen(app.get("port"), () => {
    console.log(`Servidor escuchando en el puerto: ${app.get("port")}` .cyan);
});