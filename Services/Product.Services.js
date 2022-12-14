const Product =  require("../Models/ProductSchema")
const Brand  = require("../Models/Brand")
//get all products 
exports.getProductsServices= async(productObj,queries)=>{
 const products = await Product.find(productObj)
 .skip(queries.skip)
 .limit(queries.limit)
 .select(queries.fields)
 .sort(queries.sortBy);
 const toatalProducts = await Product.countDocuments(productObj);
return {products,toatalProducts};
}
// 
exports.postProductServices =async(product)=>{
    const newProduct = new Product(product);
    const data = await newProduct.save();
    const {_id:brandID,brand} = data
    const res = await Brand.updateOne({_id:brand.id},{$push:{products:brandID}}) 
    console.log(res);
    return data;

}
// update multiple products
exports.updateProductsServices = async(products)=>{
    const data = []
    products.ids.forEach(p=>{
        data.push(Product.updateOne({_id:p.id},p.data))
    })
    const result = await Promise.all(data);
    return result;
}
// update single product
exports.updateProductServices = async(id,product)=>{
    const result = await Product.updateOne({_id:id},{$set:product},{
        runValidators:true
    });
    return result; 
}
