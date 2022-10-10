const {getCategoryService,createCategoryService} = require('../Services/Category.services');
exports.getAllCategory =async(req,res,next)=>{
    try {
        const category = await getCategoryService();
        res.status(200).send({
            status:"success",
            data:category,
            message:"Category Fetched Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
exports.createCategory = async(req,res,next)=>{
    try {
        const category = await createCategoryService(req.body);
        res.status(200).send({
            status:"success",
            data:category,
            message:"Category Added Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}