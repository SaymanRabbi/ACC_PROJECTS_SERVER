const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,'Please add a name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 characters'],
        minLength:[3,'Product name cannot be less than 2 characters'],
    },
    price:{
        type:Number,
        required:[true,'Please add a price'],
        min:[1,'Price cannot be less than 1'],
    },
        discription:{
            type:String,
            required:[true,'Please add a description'],
        },
      unit:{
        type:String,
        required:[true,'Please add a unit'],
        enum:{
            values:['kg','liter','piece'],
            message:'Please select a valid unit'
        }
      },
      quantity:{
        type:Number,
        required:[true,'Please add a quantity'],
        min:[0,'Quantity cannot be less than 1'],
        validate:{
            validator:(value)=>{
             const isIntiger = Number.isInteger(value);
             if(isIntiger){
               return true;
             }
             return false;
            }
        },
        message:'Quantity must be an intiger'
      },
      status:{
        type:String,
        required:[true,'Please add a status'],
        enum:{
            values:["inStock","outOfStock","discontinued"],
            message:`status can't be`
        }
      },
    //   createAt:{
    //     type:Date,
    //     default:Date.now
    //   },
    //   updateAt:{
    //     type:Date,
    //     default:Date.now
    //   }
// supplier:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Supplier',

// },
// categories:[{
//     name:{
//         type:String,
//         required:[true,'Please add a name'],
//     },
//     _id:mongoose.Schema.Types.ObjectId,
// }]
},{
    timestamps:true
})
// productSchema.pre("save",function(next){
//   if(this.quantity===0){
//    this.status = "outofstock";
//   }
//    next();
// })
// productSchema.post("save",function(doc,next){
//    console.log("After Saving");
//    next();
// })
// productSchema.methods.logger = function(){
//    console.log(`data saved for ${this.name}`);
// }
const Product = mongoose.model('Product',productSchema) 

module.exports = Product;