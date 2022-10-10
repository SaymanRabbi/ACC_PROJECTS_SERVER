const {getStoreServices} = require('../Services/Store.Services');
module.exports.getStore= async(req,res,next)=>{
    try {
        const store = await getStoreServices();
        res.status(200).send({
            status:"success",
            data:store,
            message:"Store Fetched Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}