const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

//username: assignment11
//password: cvuSR0ILOJz5O97S



const uri = "mongodb+srv://assignment11:cvuSR0ILOJz5O97S@cluster0.3wot6ap.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    await client.connect();
    const bookCollection = client.db("bookExpress").collection('user')


    app.post('/users', async(req, res) =>{
      const newUser = req.body;
      const result = await bookCollection.insertOne(newUser);
      res.send(result)
  });

  app.get('/users', async(req, res) =>{
    const query = {};
    const cursor = bookCollection.find(query);
    const users = await cursor.toArray();
    res.send(users);
});


  

  } finally {
    
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Running my node project')
})









app.listen(port, () => {
  console.log(`Example app listening on port`, port)
})