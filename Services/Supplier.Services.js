const Supplier = require('../Models/Supplier');
exports.getSuppliersServices = async()=>{
    const suppliers = await Supplier.find({});
    return suppliers;
}
exports.createSupplierServices = async(supplier)=>{
    const newSupplier = await Supplier.create(supplier);
    return newSupplier;
}
exports.getAsupplierServices = async(id)=>{
    const supplier = await Supplier.findById(id);
    return supplier;
}