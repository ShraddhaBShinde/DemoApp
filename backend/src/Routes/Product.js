const express=require('express');
const { createProduct } = require('../Controller/product');
const {requiresignin,AdminMiddleware} =require('../middleware/MiddleWare')
const multer=require('multer');
const router =express.Router();
const shortid=require('shortid')
const path=require('path');





const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
})
const upload=multer({storage})


router.post('/product/create',requiresignin,AdminMiddleware,upload.array('productPicture'),createProduct);




module.exports=router;
