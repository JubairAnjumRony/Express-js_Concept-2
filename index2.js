const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// MongoDB connection URI
const uri = "mongodb+srv://curd-101:ReiWuuffTuLc9IDb@cluster0.uo8ft.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function Main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");

        // Route to handle POST requests
        app.post("/add-data", (req, res) => {
            console.log("Headers:", req.headers);
            console.log("Body:", req.body);
            const data = req.body;
            res.json({
                status: true,
                data: data,
            });
        });

        console.log("Pinged your development environment. Routes are ready!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Call the Main function
Main();

// Default route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});