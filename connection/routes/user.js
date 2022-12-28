const express=require('express')
const router=express.Router()
const db=require('../db')
const utils=require('../util')
const cryptoJs=require('crypto-js')

router.post('/signup',(req,res)=>{
    const{fname,lname,email,pass}=req.body

    const encryptedPass=cryptoJs.MD5(pass)
    const query=`insert into user (fname,lname,email,pass) 
    values ('${fname}','${lname}','${email}','${encryptedPass}')`
    db.query(query,(err,result)=>{
        
          res.send(utils.createResult(err,result)) 
        console.log("inside usee")
    })
});
router.post('/signin',(req,res)=>{
    const{email,pass}=req.body
    console.log("inside get"+email)
    console.log(pass)
    const query=`select * from user where email='${email}' and pass=${pass}`
    db.query(query,(err,result)=>{
        res.send(utils.createResult(err,result)) 
        console.log("inside usee")
    })
});

router.get('/signin/:email/:pass',(req,res)=>{
    const {email,pass}=req.params
     const encryptedPass=cryptoJs.MD5(pass)
    //console.log("inside get"+req.params.email)
    console.log(email)
    const query=`select * from user where email='${email}' and pass='${encryptedPass }'`
    db.query(query,(err,result)=>{
        res.send(utils.createResult(err,result[0])) 
        console.log("inside usee")
    })
});
router.delete('/user/:uid',(req,res)=>{
    const {uid}=req.params
    //console.log("inside get"+req.params.email)
   
    const query=`delete from user where uid='${uid}'`
    db.query(query,(err,result)=>{
        res.send(utils.createResult(err,result)) 
        console.log("inside usee")
    })
});
module.exports=router