const Category = require('../Models/Category.js');
exports.getCategoryService = async()=>{
    const category = await Category.find({});
    return category;
}
exports.createCategoryService = async(category)=>{
    const newCategory = await Category.create(category);
    return newCategory;
}