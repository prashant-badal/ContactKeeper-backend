const express = require('express');

const dotenv=require ("dotenv").config()
const app=express();
const errorHandler=require("./middleware/errorHandler")

// app.get('/api/contacts',(req,res)=>{
//     res.send("okay message for ")
// })
const port=process.env.PORT ||5000;
app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
// app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})