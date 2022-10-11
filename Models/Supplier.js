const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const validator = require('validator');
const SupplierSchema =  mongoose.Schema({
name:{
    type:String,
    required:[true,'Please enter a name'],
    trim:true,
    lowercase:true,
    minLength:[3,'Name must be at least 3 characters'],
    maxLength:[100,'Name is tow large']
},
email:{
    type:String,
    validator:[validator.isEmail,'Please enter a valid email'],
    required:[true,'Please enter an email'],
    trim:true,
    lowercase:true,
    unique:true
},
brand:{
    name:{
        type:String,
        trim:true,
        required:true,
    },
    id:{
        type:ObjectId,
        ref:'Brand',
        required:true
    }
},
contactNumber:[
    {
        type:String,
        required:[true,'Please enter a contact number'],
        validator:[validator.isMobilePhone,'Please enter a valid contact number'],
    }
],
emergencyContactNumber:{
    type:String,
    required:[true,'Please enter a contact number'],
    validator:[validator.isMobilePhone,'Please enter a valid contact number'],
},
tradeLicenceNumber:{
    type:String,
    required:[true,'Please enter a trade licence number'],
},
presentAddress:{
    type:String,
    required:[true,'Please enter a present address'],
},
permanentAddress:{
    type:String, 
    required:[true,'Please enter a permanent address'],   
},
location:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    enum:{
        values:['dhaka','chittagong','khulna','barishal','rajshahi','sylhet','rangpur','mymensingh'],
        message:'Please select a valid location'
    },
},
imageURL:{
    type:String,
    validator:[validator.isURL,'Please enter a valid image URL'],
    required:true
},
nationalIdImageURL:{
    type:String,
    validator:[validator.isURL,'Please enter a valid image URL'],
    required:true
},
status:{
    type:String,
    default:'active',
    enum:['active','inactive']
}

},{timestamps:true});
const Supplier = mongoose.model('Supplier',SupplierSchema);
module.exports = Supplier;