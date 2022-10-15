const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const validator = require('validator');
const stockSchema = mongoose.Schema({
    productId:{
        type:ObjectId,
        ref:"Product",
        required:[true,'Please add a product id'],
    },
    name:{
        type:String,
        lowercase:true,
        required:[true,'Please add a name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 characters'],
        minLength:[3,'Product name cannot be less than 2 characters'],
    },
        discription:{
            type:String,
            required:[true,'Please add a description'],
        },
      unit:{
        type:String,
        required:[true,'Please add a unit'],
        enum:{
            values:['kg','liter','piece',"bag"],
            message:'Please select a valid unit'
        }
      },
      imageUrls:[{
        type:String,
        require:[true,'Please add a image url'],
        validate:[validator.isURL,'Please add a valid url']
      }],
      price:{
        type:Number,
        required:[true,'Please add a price'],
        min:[0,'Price cannot be less than 0'],
      },
      quantity:{
        type:Number,
        required:[true,'Please add a price'],
        min:[0,'quantity cannot be less than 0'],
      },

      category:{
        type:String,
        required:[true,'Please add a category'],
      },
      brand:{
        name:{
          type:String,
          required:[true,'Please add a brand name'],
        },
        id:{
         type:ObjectId,
         ref:"Brand",
          required:[true,'Please add a brand id']
        }
      },
      status:{
        type:String,
        enum:{
            values:['in-stock','out-of-stock','discontinued'],
            message:'Please select a valid status'  
        },
        required:[true,'Please add a status'],
      },
    store:{
        name:{
            type:String,
            trim:true,
            required:[true,'Please enter store name'],
            lowercase:true,
            enum:{
                values:['dhaka','chattogram','khulna','rajshahi','barisal','sylhet','rangpur'],
                message:'{VALUE} is not supported'
            }
        },
        id:{
            type:ObjectId,
            required:true,
            ref:"Store"
        }
    },
    suppliedBy:{
        name:{
            type:String,
            trim:true,
            required:[true,'Please enter supplier name'],

        },
        id:{
            type:ObjectId,
            ref:"Supplier",
        }
    },
    sellCount:{
      type:Number,
      default:0
    }
},{
    timestamps:true
})
const Stock = mongoose.model('Stock',stockSchema) 

module.exports = Stock;