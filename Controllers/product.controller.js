const { productSchema } = require("../Models/productSchema");
const mongoose = require('mongoose');
const Product = mongoose.model('Product',productSchema) 
module.exports.productControler =async (req,res,next)=>{
    try {
        const product = new Product(req.body);
       const data = await product.save();
       res.status(200).send({
              status:"success",
              data:data,
              message:"Product Added Successfully"
       })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
    // console.log('hello from product route');
}