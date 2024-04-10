const bcrypt=require('bcrypt')
const asyncHandler=require("express-async-handler")
const User =require('../models/userModel');
const jwt=require('jsonwebtoken')



//@desc- register user
//@route - Post  /api/user/register
// @access - public

const registerUser=(asyncHandler(async (req,res)=>{

    const {username,email, password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error ("ALL field are mandatory");
    }
    const availableUSer=await User.findOne({email});
    if(availableUSer){
        res.status(400);
        throw new Error ("Email already exist");
    }
    // password hashing
    const hashpassword= await bcrypt.hash(password,10);
console.log(hashpassword,"hashoasword")


    const user = await User.create({
        username,
        email,
        password:hashpassword
    })
    console.log(`user created ${user}`)

    if(user){
        res.status(201).json({_id:user.id, email:"user.email"});
    }

    else{
        res.status(400);
        throw new Error ("userdata is not valid");
    }

   
}))


//@desc- login user
//@route -post  /api/user/login
// @access - public


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {

        console.log("ok match")
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRETE, { expiresIn: "1h" }); // Fix expiresIn typo

        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});



//@desc- current user
//@route - GET  /api/user/current
// @access - private


const currentUser=(asyncHandler(async (req,res)=>{
    // const contacts = await Contact.find();
    res.status(200).json({message:"user current"});
}))






module.exports={registerUser,loginUser,currentUser}