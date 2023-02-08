const {validationResult,check} =require('express-validator')


exports.validateSignUpRequest=[
    check('firstName').notEmpty().withMessage('First name is required'),
    check('lastName').notEmpty().withMessage('Last name is required'),
    check('email').isEmail().withMessage("Please enter a valid email"),
    check('password').isLength({min:6}).withMessage('Enter the password'),
    check('gender').notEmpty().withMessage('Enter the gender'),
    check('contactNumber').isLength({min:10,max:10}).withMessage("Enter valid Mobile number")
]

exports.validateSignInrequest=[
  check('email').isEmail().withMessage("Please enter a valid email"),
  check('password').isLength({min:6}).withMessage('Enter the password'),
]

exports.isRequestValidated=(req,res,next)=>{
      const errors=validationResult(req);
      if(errors.array().length>0){
        return res.status(400).json({error:errors.array()[0].msg})
      }
      next();
}