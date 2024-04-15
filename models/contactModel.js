const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    name:{
        type:String,
        require:[true,"please add the contact name"]
    },
    email:{
        type:String,
        require:[true,"please add the contact name"]
    },
    phone:{
        type:String,
        require:[true,"please add the contact name"]
    }

},
{
    timestamps:true
}
);

module.exports=mongoose.model("contact" ,contactSchema)