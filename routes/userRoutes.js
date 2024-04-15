const express=require('express')
// const {getContacts ,getContact,createContact,updateContact,deleteContact}=require('../controllers/contactController');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validatetokenHandler = require('../middleware/validateTokenHandler');

const router=express.Router();

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)



router.route('/current').get(validatetokenHandler,currentUser)
module.exports=router;