//Server Instantiate
const express = require('express');
const app = express();

//used to parse req.body in express -> put or post
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//Activate the server on 3000 port
app.listen(3000,() => {
    console.log("Server Started at Port No. 3000")
});

//Routes
app.get('/',(req,res) => {
    res.send("Hello World");
})

//Post method
app.post('/api/cars', (req,res) => {
    const {name , brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => { console.log("Connection Successful"); })
    .catch((error) => { console.log("Received an error:", error); });
