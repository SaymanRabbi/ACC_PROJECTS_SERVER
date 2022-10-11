const multer = require('multer');
const path = require('path');
const uploader = multer({
    storage: multer.diskStorage({
        destination: 'images/',
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
        }
    }),
    fileFilter:(req,file,cb)=>{
        const fileTypes = /jpeg|jpg|png/;
        const extension = path.extname(file.originalname).toLowerCase();
        if(fileTypes.test(extension)){
            cb(null,true);
        }else{
            cb(new Error("Invalid File Type"));
        }
    },
    limits:{
        fileSize:1024*1024*5
    }
});
module.exports = uploader;