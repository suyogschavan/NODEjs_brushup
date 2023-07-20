const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Brushup';
const client = new MongoClient(url);


async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('DB1');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();