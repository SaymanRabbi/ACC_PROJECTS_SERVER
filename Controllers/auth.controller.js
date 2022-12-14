const { genarateToken } = require("../Middleware/token");
const { signupService } = require("../Services/Auth.Services");
const { loginService } = require("../Services/Login.Service");
const User = require("../Models/User");
const { sendMailWithGmail } = require("../Helpers/SendMail");
module.exports.signupController = async(req,res)=>{
    try {
        const user = await signupService(req.body);
        const token = await user.tokenConfirmation()
        const url = `http://localhost:5000/api/v1/auth/confirmation/${token}`
        await user.save({validateBeforeSave:false})
        const mailData = {
            to:[user.email],
            subject:"Verify Your Email",
            name: user.first_name,
            url:url
        } 
        sendMailWithGmail(mailData);
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
module.exports.confirmation = async(req,res)=>{
    try {
        const user = await User.findOne({confirmationToken:req.params.token});
        if(!user){
            res.status(404).send({
                status:"failed",
                message:"Token Not Valid"
            })
        }
        user.status = 'active';
        user.confirmationToken = undefined;
        user.confirmationTokenExp = undefined;
        await user.save({validateBeforeSave:false})
        res.status(201).send({
            status:"success",
            message:"User Verified Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}