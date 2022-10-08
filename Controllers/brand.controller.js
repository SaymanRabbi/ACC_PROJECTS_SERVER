const { postBrand } = require("../Services/Brand.Services");

module.exports.brandController= async(req,res,next)=>{
    // res.send("Brand Controller Working")
    try {
        // instance creation do something then save()
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