const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Brushup';
const client = new MongoClient(url);

// Function for connection
async function dbConnect(){
    let result = await client.connect();
    db = await result.db(database);
    return db.collection('DB1');
}

module.exports = dbConnect;