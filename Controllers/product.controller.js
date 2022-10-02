const { productSchema } = require("../Models/productSchema");
const mongoose = require('mongoose');
productSchema.pre("save",function(next){
   if(this.quantity===0){
    this.status = "outofstock";
   }
    next();
})
productSchema.post("save",function(doc,next){
    console.log("After Saving");
    next();
})
productSchema.methods.logger = function(){
    console.log(`data saved for ${this.name}`);
}
const Product = mongoose.model('Product',productSchema) 
module.exports.productControler =async (req,res,next)=>{
    try {
        // instance creation do something then save()
        const product = new Product(req.body);
       const data = await product.save();
       product.logger()
       res.status(200).send({
              status:"success",
              data:data,
              message:"Product Added Successfully"
       })
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }
    // console.log('hello from product route');
}