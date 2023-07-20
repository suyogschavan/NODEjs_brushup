const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Brushup';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
     db = result.db(database);
    return db.collection('DB1');
}

const soul = async ()=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.warn(data)

}

soul();