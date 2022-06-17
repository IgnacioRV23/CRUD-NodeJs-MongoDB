const {MongoClient} = require("mongodb");

const colors = require('colors');

var connection = null;

const DB_NAME = "Store";

const MONGO_URI = "mongodb+srv://admin:admin@crud-node.1lkz4.mongodb.net/?retryWrites=true&w=majority";

module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    try {
        if (!connection) {
            const client = new MongoClient(MONGO_URI);
            connection = await client.connect();
            console.log("Conexión con MongoDB Atlas realizada" .green);
        } else {
            console.log("Conexión reutilizada" .green);
        }
        const db = connection.db(DB_NAME);
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
        console.log(`module.exports.Database:error: ${error}` .red);
    }
});