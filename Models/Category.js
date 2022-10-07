const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const validator = require('validator');

const categorySchema =  mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Please enter category name'],
        maxlength:100,
        lowercase:true,
        unique:true
    },
    description:String,
    imageUrl:{
        type:String,
        validate:[validator.isURL,'Please enter valid image url']
    }
},{
    timestamps:true
})

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;