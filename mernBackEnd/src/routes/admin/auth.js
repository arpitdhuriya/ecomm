const {
    response
} = require('express');
const express = require('express');
const {
    signup,
    signin
} = require('../../controllers/admin/auth');
const router = express.Router();

const { validateSignUpRequest, isRequestValidated,validateSignInRequest } = require('../../validators/auth');
router.post('/admin/signin', validateSignInRequest, isRequestValidated,signin);

router.post('/admin/signup', validateSignUpRequest, isRequestValidated,signup);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({
//         user: 'Profile'
//     })
// });


module.exports = router;