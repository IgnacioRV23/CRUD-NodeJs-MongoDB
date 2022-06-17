const {Database} = require("../database/database");

const {ObjectId} = require("mongodb");

const COLLECTION = "Products";

const getAll = async () => {
    const collection = await Database(COLLECTION);
    let result = await collection.find({}).toArray();
    return result;
};

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    let result = await collection.findOne({_id:ObjectId(id)});
    return result;
};

const create = async (newProduct) => {
    const collection = await Database(COLLECTION);
    await collection.insertOne(newProduct);
};

module.exports.ProductsService = {
    getAll,
    getById,
    create
};