const express =require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const app = express();

// ReiWuuffTuLc9IDb
// curd-101

// Mongodb connection URI
const uri = "mongodb+srv://curd-101:ReiWuuffTuLc9IDb@cluster0.uo8ft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// middleware
app.use(express.json());
app.use(cors());


async function Main(){

    try{
          await client.connect();
    //       await  client.db("admin".at).command({ping:1});


          app.post("/add-data",(req,res) =>{
            const data =req.body;
            console.log(data);
            // res.send("data paisi bhai",data);
            res.json({
                status:true,
                data:data,
            });
          })

          console.log("pinged your developement.You successfully connnectd to mongodb");
    }
    catch(error){
        console.log(error)
    }
}

// call the main function
Main()

// Default route
app.get("/",(req,res) =>{
    res.send("hello");
})

// start the server
app.listen(port,()=>{
    console.log("server is running.....");
})