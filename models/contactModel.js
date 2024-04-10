const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
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