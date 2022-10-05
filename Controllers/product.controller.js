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
       let productObj = {...req.query}
       //gte,gt,lte,lt
      //sort,limit,page --> exclude
      const excludeFields = ['sort','limit','page'];
      excludeFields.forEach(field=>delete productObj[field]);
      let queryStr = JSON.stringify(productObj);
          queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);
         productObj = JSON.parse(queryStr);
      const queries = {}
      //sort
      if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        queries.sortBy = sortBy;
      }
      //filtering
      if(req.query.fields){
        const fields = req.query.fields.split(',').join(' ');
        queries.fields = fields;
      }
      //pagination
        if(req.query.page){
        const {page =1,limit = 10} = req.query;
        const skip = (page-1)*parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
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