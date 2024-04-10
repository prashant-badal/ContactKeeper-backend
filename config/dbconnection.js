const mongoose= require("mongoose");
const dotenv=require ("dotenv").config()

const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DataBase connected",connect.connection.name)
    }

    catch(err){
        console.log("Error DB:",err);
        process.exit(1)
    }
}
module.exports=connectDB

