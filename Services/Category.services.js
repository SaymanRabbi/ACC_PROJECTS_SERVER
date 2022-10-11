const Category = require('../Models/Category.js');
exports.getCategorysServices = async()=>{
    const category = await Category.find({});
    return category;
}
exports.createCategoryServices = async(category)=>{
    const newCategory = await Category.create(category);
    return newCategory;
}