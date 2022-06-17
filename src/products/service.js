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

const update = async (id, dataProduct) => {
    const collection = await Database(COLLECTION);
    await collection.updateOne(
        {_id:ObjectId(id)},
        {$set:{...dataProduct}}
    );
};

const deleteService  = async (id) => {
    const collection = await Database(COLLECTION);
    await collection.deleteOne({_id:ObjectId(id)});
};

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    update,
    deleteService
};