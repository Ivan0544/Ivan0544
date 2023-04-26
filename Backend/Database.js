module.exports = {
   
  db: "mongodb+srv://pruebas-vue:12345@cluster0.sg4ni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  // db: "mongodb://localhost:27017/",
};

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function main() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);
