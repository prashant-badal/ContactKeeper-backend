
const asyncHandler=require("express-async-handler")
const jwt=require('jsonwebtoken')


const validatetokenHandler=asyncHandler(async(req,res,next)=>{
    let token;
    const authToken= req.headers.authorization || req.headers.Authorization;

    if(authToken && authToken.startsWith('Bearer')){
        token =authToken.split(" ")[1];

        jwt.verify(token,process.env.ACCESS_TOKEN_SECRETE,(err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("user is not authroized")
            }
        req.user=decoded.user;
        next()
        console.log(req.user)
           if(!token){
            res.status(401)
            throw new Error("token is valid")
           }
        })
    }
})
module.exports=validatetokenHandler