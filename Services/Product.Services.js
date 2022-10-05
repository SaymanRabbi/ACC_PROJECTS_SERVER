const Product =  require("../Models/ProductSchema");
exports.getProducts= async(productObj,queries)=>{
 const products = await Product.find(productObj).select(queries.fields).sort(queries.sortBy);
return products;
}
exports.postProducts =async(product)=>{
    const newProduct = new Product(product);
    const data = await newProduct.save();
    return data;

}
exports.bulkUpdateProduct = async(products)=>{
    const data = []
    products.ids.forEach(p=>{
        data.push(Product.updateOne({_id:p.id},p.data))
    })
    const result = await Promise.all(data);
    return result;
}
exports.updateProduct = async(id,product)=>{
    const result = await Product.updateOne({_id:id},{$set:product},{
        runValidators:true
    });
    return result; 
}
