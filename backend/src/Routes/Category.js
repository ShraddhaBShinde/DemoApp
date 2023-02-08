const express=require('express');
const { addCategory, getCategories } = require('../Controller/category');
const { requiresignin, AdminMiddleware } = require('../middleware/MiddleWare');


const router=express.Router();

router.post('/category/create',requiresignin,AdminMiddleware, addCategory);
router.get('/category/getcategory',requiresignin, getCategories);
module.exports=router;