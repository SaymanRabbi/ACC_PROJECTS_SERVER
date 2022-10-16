const User = require("../Models/User");
const bcrypt = require('bcryptjs')
module.exports.loginService=async(userinfo)=>{
    const {email,password} = userinfo;
    if(!email || !password){
        throw new Error("Please provide email and password");
    }
    const user = await User.findOne({email});
    if(!user){
        throw new Error("User Not Found")
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error("Password is Incorrect")
    }
    return user;
}