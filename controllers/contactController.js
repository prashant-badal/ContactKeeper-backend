const asyncHandler=require("express-async-handler")


//@desc- Get all Contacts
//@route - GET  /api/contacts
// @access - public

const getContacts =(asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Get all Contact"})
}))

//@desc- Get a Contact
//@route - GET  /api/contacts/:id
// @access - public

const getContact =(asyncHandler(async (req,res)=>{
    res.status(200).json({message:`get Contact of id - ${req.params.id}`})
}))

//@desc- create  Contact
//@route - POST  /api/contacts
// @access - public

const createContact =(asyncHandler(async (req,res)=>{
    const {name,age,mobile}=req.body;
    if(!name || !mobile || !age){
        res.status(400);
        throw new Error ("ALL field are mandatory");
    }
    console.log("req to create", req.body)
    res.status(201).json({message:" Create Contact"})
}))


//@desc- update  Contact
//@route - PUT  /api/contacts/:id
// @access - public

const updateContact =(asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update Contact of id - ${req.params.id}`})

}))

//@desc- delete  Contact
//@route - DELETE  /api/contacts/:id
// @access - public

const deleteContact =(asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete Contact of id - ${req.params.id}`})
}))



    module.exports ={ getContacts ,getContact,createContact,updateContact,deleteContact,};