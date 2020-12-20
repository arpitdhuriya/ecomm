const  {check, validationResult} = require('express-validator'); 


exports.validateSignUpRequest = [
    check('firstName').notEmpty().withMessage('First Name can not be empty')
    ,
    check('lastName').notEmpty().withMessage('Last Name can not be empty')
    ,
    check('email').isEmail().withMessage('Email is not correct')
    ,
    check('password').isLength({min:6}).withMessage('Password must be atleast 6 char long')

];




exports.validateSignInRequest = [
    
    check('email').isEmail().withMessage('Email is not correct')
    ,
    check('password').isLength({min:6}).withMessage('Password must be atleast 6 char long')

];

exports.isRequestValidated = (req,res,next)=> {
    const errors = validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({
         error: errors.array()[0].msg
    });} 
    next();
}