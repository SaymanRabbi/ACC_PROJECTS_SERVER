const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Route Is Working!!")
})
module.exports = app;