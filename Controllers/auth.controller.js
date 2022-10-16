const { signupService } = require("../Services/Auth.Services");

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