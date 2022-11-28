//importing react
//import React, { Component } from 'react';
//import Newpage from './trial_page';

//reading the .js file 
const fs = require("fs");
const java = fs.readFileSync("trial_page.js");

const express =require('express')
const app=express()
const mongoose =require('mongoose')
app.use(express.json())
const cors =require("cors")
app.use(cors())
const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken')
const secret='abc123'//this is a random string based on which teh token will be generated

const mongourl="mongodb://localhost:27017/BACKEND"
mongoose.connect(mongourl,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("connected to database");
})
.catch( (e)=>console.log(e))

require('./UserDetails');
const user=mongoose.model("UserInfo");
//creating a regestration api
app.post("/register",async(req,res)=>{
    const {f_name,l_name,mail,password}=req.body;
    const enc = await bcrypt.hash(password,10) 
    try{
        //to make sure there is are no 2 users with same emails
        const olduser = await user.findOne({mail});
        if(olduser){
            return res.send({error:'user exists'});
        }

        await user.create({
            f_name,
            l_name,
            mail,
            password : enc,
        });
        res.send({status:"ok"})
    }catch(error){
        res.send({status:"error"})
    }
});


app.post('/login-user',async (req,res)=>{
    //this api is used to validate the user login details
    const {mail,password}=req.body;
    //checking if the user exists
    const log_user = await user.findOne({mail});
    if(!log_user){
        return res.json({error:'user not found'})
    } 

    if(await bcrypt.compare(password,log_user.password)){

        //const token =jwt.sign({logname : log_user.f_name},secret)
        const token =jwt.sign({mail : log_user.mail},secret)

        if(res.status(201)){

            const lm=jwt.decode(token).mail;
            //return res.json({status : 'ok' , data : jwt.decode(token)})
            return res.json({status:'ok',data:token})
        }
        else{
            return res.json({error:"error"})
        }
    }
    res.json({status:'error',error:'Invalid Password'})
})


app.post('/userData',(req,res)=>{
    //getting user details
    const {token} =req.body;
    try{
        const vuser=jwt.verify(token,secret)
        const usermail=vuser.mail;
        user.findOne({mail:usermail})
        .then((data)=>{
            res.send({status : "ok" ,data:data})
        })
        .catch((error)=>{
            res.send({ststus:'error',data:error})
        })

    }catch {error}{
        //
    }
})

app.listen(5000,()=>{
    console.log("server started")
})