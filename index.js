// const express = require('express')
// const app = express()
// const cors = require('cors')
// const port = process.env.PORT || 5000;

// // middleware 
// app.use(cors());
// app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Hello G!')
// })

// // g3IANYkDvToozY2X

// // mongodb confiq here
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Ecommerce-Book:g3IANYkDvToozY2X@cluster0.s8tsktz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//  // create a collection of documents
//  const bookCollections = client.db("BooksInventory").collection("books");
//  // insert a book to the database:post method
//  app.post("/upload", async (req, res) => {
//    const data = req.body;
//    const results = await bookCollections.insertOne(data);
//    res.send(results);
//  });



//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




