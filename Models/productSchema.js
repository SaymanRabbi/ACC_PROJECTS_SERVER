const mongoose = require('mongoose');
module.exports.productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 characters'],
        minLength:[3,'Product name cannot be less than 2 characters'],
        unique:true
    },
    price:{
        type:Number,
        required:[true,'Please add a price'],
        min:[0,'Price cannot be less than 1'],
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