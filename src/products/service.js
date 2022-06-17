const {Database} = require("../database/database");

const COLLECTION = "Products";

const getAll = async () => {
    const collection = await Database(COLLECTION);
    let result = await collection.find({}).toArray();
    return result;
};


module.exports.ProductsService = {
    getAll
};