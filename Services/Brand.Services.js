const Brand = require('../Models/Brand');
exports.postBrand =async(brand)=>{
    const newBrand =await Brand.create(brand)
    return newBrand;
}
exports.getBrand = async()=>{
    const brand = await Brand.find({}).populate('products');
    return brand;
}
exports.getsingelBrand = async(id)=>{
    const brand = await Brand.findById(id);
    return brand;
}