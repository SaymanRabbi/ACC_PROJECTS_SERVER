const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const validator = require('validator');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
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
        validate:{
            validator:(v)=>{
                if(!Array.isArray(v)){
                    return false;
                }
                let isvalid = true;
                v.forEach(url=>{
                    if(!validator.isURL(url)){
                        isvalid = false;
                    }
                })
               return isvalid
            },
            message:'Please enter a valid url'
        }
      }],
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
      }
},{
    timestamps:true
})
const Product = mongoose.model('Product',productSchema) 

module.exports = Product;