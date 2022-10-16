const User = require("../Models/User");
const bcrypt = require('bcryptjs')
module.exports.signupService = async(userinfo)=>{
    const {password} = userinfo;
    const hashpassword =await bcrypt.hash(password,12)
    const user = await User.create({
        ...userinfo,
        password:hashpassword
    });
   return user; 
}