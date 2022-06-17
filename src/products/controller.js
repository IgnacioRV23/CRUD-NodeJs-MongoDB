const {ProductsService} = require("./service");

const colors = require('colors');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = ProductsService.getAll();
            res.status(200).json({
                message:"Lista de productos",
                body:products
            });
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
            console.log(`module.exports.ProductsController:getProducts: ${error}` .red);
        }
    }
};