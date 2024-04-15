const asyncHandler=require("express-async-handler")
const Contact = require("../models/contactModel")


//@desc- Get all Contacts
//@route - GET  /api/contacts
// @access - public

const getContacts =(asyncHandler(async (req,res)=>{
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
}))

//@desc- Get a Contact
//@route - GET  /api/contacts/:id
// @access - public

const getContact =(asyncHandler(async (req,res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact)
}))

//@desc- create  Contact
//@route - POST  /api/contacts
// @access - public

const createContact =(asyncHandler(async (req,res)=>{ 
   
    const {name,email,phone}=req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error ("ALL field are mandatory");
    }

    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id :req.user.id

    })
    // console.log("req to create", req.body)
    res.status(201).json(contact)
}))


//@desc- update  Contact
//@route - PUT  /api/contacts/:id
// @access - public

const updateContact =(asyncHandler(async (req,res)=>{
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedContact)

}))

//@desc- delete  Contact
//@route - DELETE  /api/contacts/:id
// @access - public

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    await contact.remove();
    res.status(200).json(contact);
  });


    module.exports ={ getContacts ,getContact,createContact,updateContact,deleteContact};