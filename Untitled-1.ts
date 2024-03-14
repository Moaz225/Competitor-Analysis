// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/mydb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Insert a document into a collection
client.connect(async (err, client) => {
  const collection = client.db("mydb").collection("users");
  await collection.insertOne({ name: "John", age: 30 });
  await collection.insertOne({ name: "Jane", age: 25 });
});

// Query documents from the collection
client.connect(async (err, client) => {
  const collection = client.db("mydb").collection("users");
  const users = await collection.find({}).toArray();
  console.log(users);
});
