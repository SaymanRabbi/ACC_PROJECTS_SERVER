const mongoose = require('mongoose');
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Please enter brand name'],
        maxlength:100,
        unique:true,
        lowercase:true
    },
    description:String,
    email:{
        type:String,
        validate:[validator.isEmail,'Please enter valid email'],
        lowercase:true
    },
    website:{
        type:String,
        validate:[validator.isURL,'Please enter valid website']
    },
    location:String,
    products:[{
        type:ObjectId,
        ref:"Product"
    }],
    suppliers:[{
        name:String,
        contactNumber:String,
        id:{
           type:ObjectId,
           ref:"Supplier"}
    }],
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    }
},{
    timestamps:true
})
const Brand = mongoose.model('Brand',brandSchema);

module.exports = Brand;