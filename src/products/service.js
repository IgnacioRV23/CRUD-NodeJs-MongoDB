const {Database} = require("../database/database");

const COLLECTION = "Products";

const getAll = async () => {
    const collection = await Database(COLLECTION);
    let result = await collection.find({}).toArray();
    return result;
};

const create = async (newProduct) => {
    const collection = await Database(COLLECTION);
    await collection.insertOne(newProduct);
};

module.exports.ProductsService = {
    getAll,
    create
};