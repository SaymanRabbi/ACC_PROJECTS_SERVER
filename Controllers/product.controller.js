const { getProducts, postProducts,updateProduct,bulkUpdateProduct } = require("../Services/Product.Services");

module.exports.productControler =async (req,res,next)=>{
    try {
        // instance creation do something then save()
        const product = await postProducts(req.body);
       res.status(200).send({
              status:"success",
              data:product,
              message:"Product Added Successfully"
       })
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }
    // console.log('hello from product route');
}
exports.getProductControler = async (req,res,next)=>{
    try {
       const productObj = {...req.query}
      //sort,limit,page --> exclude
      const excludeFields = ['sort','limit','page'];
      excludeFields.forEach(field=>delete productObj[field]);
      const queries = {}
      if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        queries.sortBy = sortBy;
      }
      if(req.query.fields){
        const fields = req.query.fields.split(',').join(' ');
        queries.fields = fields;
      }
    const data = await getProducts(productObj,queries);
         res.status(200).send({
            status:"success",
            data:data,
            message:"Product Fetched Successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }
}
exports.updateProductControler = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const data = await updateProduct(id,req.body);
         res.status(200).send({
            status:"success",
            data:data,
            message:"Product Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }
}

exports.bulkUpdateProduct=async (req,res,next)=>{
    try {
       const data = await bulkUpdateProduct(req.body);
         res.status(200).send({
            status:"success",
            data:data,
            message:"Bulk Update Successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }
}