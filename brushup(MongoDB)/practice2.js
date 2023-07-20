const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'Brushup';

async function dbconnect(){
    let connection = await client.connect();
    db = connection.db(database);
    return db.collection('DB1');
}

const print = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn("Data from DB:",data)
}

print();