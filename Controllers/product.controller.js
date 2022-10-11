const { getProductsServices, postProductServices,updateProductServices,updateProductsServices } = require("../Services/Product.Services");

module.exports.postAproduct =async (req,res)=>{
    try {
        const product = await postProductServices(req.body);
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
}
exports.getProducts = async (req,res)=>{
    try {
       let productObj = {...req.query}
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
    const data = await getProductsServices(productObj,queries);
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
exports.updateAProduct = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const data = await updateProductServices(id,req.body);
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

exports.updateProducts=async (req,res,next)=>{
    try {
       const data = await updateProductsServices(req.body);
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
exports.fileUploadControler = async (req,res,next)=>{
        res.send(req.files)
}