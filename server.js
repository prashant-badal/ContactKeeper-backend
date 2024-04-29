const express = require('express');

// const dotenv=require ("dotenv").config()

const errorHandler=require("./middleware/errorHandler");
const connectDB = require('./config/dbconnection');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

connectDB();
const app=express();

const port=process.env.PORT ||5000;

var cors = require('cors') 
app.use(cors(corsOptions))

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