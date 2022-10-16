const express = require('express');
const app = express();
const cors = require('cors');
const brandroute = require('./Routes/brand.route');
const product = require('./Routes/product.route');
const store = require('./Routes/store.route');
const category = require('./Routes/category.route');
const supplier = require('./Routes/supplier.route');
const stock = require('./Routes/stock.route');
const auth = require('./Routes/auth.route');
// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/product',product);
app.use('/api/v1/store',store);
app.use('/api/v1/category',category);
app.use('/api/v1/brand',brandroute);
app.use("/api/v1/supplier",supplier)
app.use("/api/v1/stock",stock)
app.use('/api/v1/auth',auth)

app.get("/",(req,res)=>{
    res.send("Route Is Working!!")
})
// Routes
module.exports = app;