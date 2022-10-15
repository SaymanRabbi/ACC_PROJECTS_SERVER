const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        validate:[validator.isEmail,'Please add a valid email'],
        required:[true,'Please add an email'],
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        validate:{
            validator:(value)=>validator.isStrongPassword(value,{
                minLength:6,
                minLowercase:3,
                minUppercase:1,
                minNumbers:1,
                minSymbols:1,
            }),
            messages:'Password {value} is not strong enough'
        }
    },
    confirmPassword:{
        type:String,
        required:[true,'Please add a password'],
        validate:{
            validator:function(value){
                return value === this.password
            },
            message:'Passwords do not match'
        }
    },
    role:{
        type:String,
        enum:['user','admin','buyer'],
        default:'buyer'
    },
    first_name:{
        type:String,
        required:[true,'Please add a first name'],
        trim:true,
        maxLength:[100,'First name cannot exceed 100 characters'],
    },
    last_name:{
        type:String,
        required:[true,'Please add a last name'],
        trim:true,
        maxLength:[100,'Last name cannot exceed 100 characters'],
    },
    constactNumber:{
        type:String,
        validate:[validator.isMobilePhone,'Please add a valid contact number'],
    },
    shippingAddress:{
        type:String,
    },
    imgURL:{
        type:String,
        validate:[validator.isURL,'Please add a valid url']
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date,
},{
    timestamps:true
})