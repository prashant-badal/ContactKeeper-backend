const mongoose=require('mongoose');


const userScheme=mongoose.Schema({

    username:{
        type:String,
        require:[true,"please add the user name"]
    },
    email:{
        type:String,
        require:[true,"please add the user name"],
        unique:[true,"this email already exist"]
    },

    password:{
        type:String,
        require:[true,"please add the password"],
       
    },},

{
    timestamps:true
}
);

module.exports=mongoose.model("user" , userScheme)