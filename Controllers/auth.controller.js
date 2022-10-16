const { genarateToken } = require("../Middleware/token");
const { signupService } = require("../Services/Auth.Services");
const { loginService } = require("../Services/Login.Service");
const User = require("../Models/User");
module.exports.signupController = async(req,res)=>{
    try {
        const user = await signupService(req.body);
        res.status(201).send({
            status:"success",
            data:user,
            message:"User Created Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
module.exports.loginController=async(req,res)=>{
    try {
        const user = await loginService(req.body);
        const token = genarateToken(user)
        const {password,...data} = user.toObject();
        res.status(201).send({
            status:"success",
            data:data,
            token,
            message:"User Logged In Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
module.exports.veryfyme = async(req,res)=>{

    try {
        const user = await User.findOne({email:req.userData.email});
        const {password,...data} = user.toObject();
        res.status(201).send({
            status:"success",
            data:data,
            message:"User Logged In Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}