const { postBrand,getBrand,getsingelBrand} = require("../Services/Brand.Services");

module.exports.createBrand= async(req,res,next)=>{
    try {
        const brand = await postBrand(req.body);
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
exports.getBrand = async(req,res,next)=>{
    try {
        const brand = await getBrand();
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
exports.singelBrand= async(req,res,next)=>{
    try {
        const {id} = req.params;
        const brand = await getsingelBrand(id);
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