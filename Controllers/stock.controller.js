const { getAllStockServices, updateStocksServices, updateAstockServices, createStockServices } = require("../Services/Stock.Services");
module.exports.createAstock =async (req,res)=>{
    try {
        const stock = await createStockServices(req.body);
       res.status(200).send({
              status:"success",
              data:stock,
              message:"Product Added Successfully"
       })
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }


}
exports.getstocks = async (req,res)=>{
    try {
       let stockObj = {...req.query}
      const excludeFields = ['sort','limit','page'];
      excludeFields.forEach(field=>delete stockObj[field]);
      let queryStr = JSON.stringify(stockObj);
          queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);
         stockObj = JSON.parse(queryStr);
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
    const data = await getAllStockServices(stockObj,queries);
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
exports.updateAstock = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const data = await updateAstockServices(id,req.body);
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

exports.updatestocks=async (req,res,next)=>{
    try {
       const data = await updateStocksServices(req.body);
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