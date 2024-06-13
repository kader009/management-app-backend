const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = 5000;

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const taskDb = client.db('tasksDB');
    const tasksCollection = taskDb.collection('taskCollection');

    app.get('/tasks', async (req, res) =>{
      const result = await tasksCollection.find({}).toArray();
      res.send(result)
    })

    app.post('/tasks', async (req, res) =>{
      const tasksData = req.body;
      const result = await tasksCollection.insertOne(tasksData);
      res.send(result)
    })

    app.delete('/tasks/:id', async (req, res) =>{
      const tasksData = req.body;
      const result = await tasksCollection.deleteOne(tasksData);
      res.send(result)
    })

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Task app Server!');
});

app.listen(port, () => {
  console.log(`Task Server app listening on port ${port}`);
});
