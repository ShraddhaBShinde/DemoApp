const express=require('express');
const { addtocart } = require('../Controller/cart');

const { requiresignin,userMiddleware } = require('../middleware/MiddleWare');

const router=express.Router();


router.post('/user/addtocart',requiresignin,userMiddleware,addtocart)





module.exports=router;