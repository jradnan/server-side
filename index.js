const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();

// midlewear
// dbjohn1
// CCf51laXcpyFOlip



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hnfouhs.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const Productcollection = client.db("emajohn").collection("product");

        app.get("/product", async (req,res)=>{
            const query = {};
            const cursor = Productcollection.find(query);
            const products = await cursor.toArray();
            res.send(products);

        })
    }
    finally{

    }
}
run().catch(console.dir);


app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('ema not john is running')
});

app.listen(port, ()=>{
    console.log('backend is running')
})
