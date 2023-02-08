const express=require('express');
const { signup, signin } = require('../../Controller/admin/auth');
const { isRequestValidated, validateSignUpRequest, validateSignInrequest } = require('../../validation/validate');
const router= express.Router();


router.post('/admin/signup',validateSignUpRequest,isRequestValidated,signup);


router.get('/admin/signin',validateSignInrequest,isRequestValidated,signin);



module.exports = router;
