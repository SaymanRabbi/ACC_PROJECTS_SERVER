const {getStoreServices,createStoreServices,getsingelStoreServices} = require('../Services/Store.Services');
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
exports.createStore = async(req,res,next)=>{
    try {
        const store = await createStoreServices(req.body);
        res.status(200).send({
            status:"success",
            data:store,
            message:"Store Added Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
exports.singelStore= async(req,res,next)=>{
    try {
        const {id} = req.params;
        const store = await getsingelStoreServices(id);
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