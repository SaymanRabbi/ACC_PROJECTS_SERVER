const Brand = require('../Models/Brand');
exports.postBrand =async(brand)=>{
    const newBrand =await Brand.create(brand)
    return newBrand;
}