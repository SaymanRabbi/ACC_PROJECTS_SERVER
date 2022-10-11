const { getSuppliersServices,createSupplierServices,getAsupplierServices } = require("../Services/Supplier.Services");

exports.getSuppliers= async(req,res)=>{
    try {
        const suppliers = await getSuppliersServices();
        res.status(200).send({
            status:"success",
            data:suppliers,
            message:"Suppliers Fetched Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
exports.createAsupplier = async(req,res)=>{
    try {
        const supplier = await createSupplierServices();
        res.status(201).send({
            status:"success",
            data:supplier,
            message:"Supplier Created Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
exports.getAsupplier = async(req,res)=>{
    try {
        const {id} = req.params;
        const supplier = await getAsupplierServices(id);
        res.status(200).send({
            status:"success",
            data:supplier,
            message:"Supplier Fetched Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}