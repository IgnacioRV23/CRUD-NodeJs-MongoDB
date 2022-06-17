const {ProductsService} = require("./service");

const colors = require('colors');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            res.status(200).json({
                message:"Lista de productos",
                body:products
            });
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
            console.log(`module.exports.ProductsController:getProducts: ${error}` .red);
        }
    },

    createProduct: async (req, res) => {
        try {
            let {body:newProduct} = req;
            await ProductsService.create(newProduct);
            res.status(201).json({message:"Producto creado"});
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
            console.log(`module.exports.ProductsController:createProduct: ${error}` .red);
        }
    }
};