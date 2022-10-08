const express = require('express');
const app = express();
const cors = require('cors');
const brandroute = require('./Routes/brand.route');
const product = require('./Routes/product.route');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/product', product);
app.use('/api/v1/brand', brandroute);

app.get("/",(req,res)=>{
    res.send("Route Is Working!!")
})
// Routes
module.exports = app;