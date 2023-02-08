const express = require("express");
const { signup, signin } = require("../Controller/auth");
const { requiresignin } = require("../middleware/MiddleWare");
const { validateSignUpRequest,isRequestValidated, validateSignInrequest } = require("../validation/validate");
const router = express.Router();

router.get('/signin',validateSignInrequest,isRequestValidated,signin);

router.post('/signup',validateSignUpRequest,isRequestValidated,signup);



module.exports = router;