const Brand = require('../Models/Brand');
exports.postAbrand =async(brand)=>{
    const newBrand =await Brand.create(brand)
    return newBrand;
}
exports.getBrands = async()=>{
    const brand = await Brand.find({}).populate('products');
    return brand;
}
exports.getAbrand = async(id)=>{
    const brand = await Brand.findById(id);
    return brand;
}