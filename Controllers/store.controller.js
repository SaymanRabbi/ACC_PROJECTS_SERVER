const {getStoresServices,createStoreServices,getsingelStoreServices} = require('../Services/Store.Services');
module.exports.getStores= async(req,res)=>{
    try {
        const {} = req.query;
        const store = await getStoresServices();
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
exports.createAstore = async(req,res)=>{
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
exports.getAstore= async(req,res)=>{
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