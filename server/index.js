const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://yaswanthvijjapu799:322103310251@cluster0.balqi.mongodb.net/server')
  .then(() => console.log("Connected to MongoDB "))
  .catch((err) => console.log("Error: ", err));

  app.post('/login',async(req,res)=>{
    const {email,password} =req.body;
    const user = await EmployeeModel
    .findOne({email:email,password:password})
    if(user){
        res.send({message:'success'})
    }
    else{
        res.send({message:'failure'})
    }
})
 
app.post('/signup',async(req,res)=>{
   const {name,email,password} =req.body;
   try{
    const user = new EmployeeModel({name,email,password})
    await user.save()
   }
   catch{
    console.log(err);
   }
})
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(5000,()=>{
    console.log("server is running")
}) 