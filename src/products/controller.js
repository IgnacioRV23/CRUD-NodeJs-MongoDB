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

    getProduct: async (req, res) => {
        try {
            let {params:{id}} = req;
            let product = await ProductsService.getById(id);
            res.status(200).json({
                message:"Producto encontrado",
                body:product
            });
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
            console.log(`module.exports.ProductsController:getProduct: ${error}` .red);
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
    },

    updateProduct: async (req, res) => {
        try {
            let {params:{id}} = req;
            let {body:dataProduct} = req;
            await ProductsService.update(id, dataProduct);
            res.status(200).json({message:"Producto actualizado"});
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
            console.log(`module.exports.ProductsController:updateProduct: ${error}` .red);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            let {params:{id}} = req;
            await ProductsService.deleteService(id);
            res.status(200).json({message:"Producto eliminado"});
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
            console.log(`module.exports.ProductsController:deleteProduct: ${error}` .red);
        }
    }
};