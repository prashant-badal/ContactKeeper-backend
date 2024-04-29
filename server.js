const express = require('express');

// const dotenv=require ("dotenv").config()

const errorHandler=require("./middleware/errorHandler");
const connectDB = require('./config/dbconnection');

// app.get('/api/contacts',(req,res)=>{
//     res.send("okay message for ")
// })

connectDB();
const app=express();

const port=process.env.PORT ||5000;

var cors = require('cors') 
app.use(cors())

app.use(express.json());
app.get('/hello', (req, res) => {
    res.json({ message: 'hello' });
  });
  
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/user',require('./routes/userRoutes'));
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})