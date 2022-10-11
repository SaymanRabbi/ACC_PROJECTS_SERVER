const { postAbrand,getBrands,getAbrand} = require("../Services/Brand.Services");

module.exports.createAbrand= async(req,res,next)=>{
    try {
        const brand = await postAbrand(req.body);
       res.status(200).send({
              status:"success",
              data:brand,
              message:"Brand Added Successfully"
       })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
exports.getBrands = async(req,res,next)=>{
    try {
        const brand = await getBrands();
        res.status(200).send({
            status:"success",
            data:brand,
            message:"Brand Fetched Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
exports.getAbrand= async(req,res,next)=>{
    try {
        const {id} = req.params;
        const brand = await getAbrand(id);
        res.status(200).send({
            status:"success",
            data:brand,
            message:"Brand Fetched Successfully"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}