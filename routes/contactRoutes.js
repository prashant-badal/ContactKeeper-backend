const express = require('express')

const router=express.Router()
const {getContacts,getContact,createContact,updateContact,deleteContact}=require("../controllers/contactController")
const validatetokenHandler = require('../middleware/validateTokenHandler')

router.route('/').get(validatetokenHandler,getContacts)


router.route('/:id').get(validatetokenHandler,getContact)

router.route('/').post(validatetokenHandler,createContact)

router.route('/:id').put(validatetokenHandler,updateContact )

router.route('/:id').delete(validatetokenHandler,deleteContact)


module.exports=router