const db=require('../db')
const utils=require('../util')
const express =require('express')
const router=express.Router()
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });

router.post('/',upload.single("thumbnail"),(req,res)=>{
    const{fname,lname}=req.body
    const filename1=req.file.filename;
    const query1=`insert into artist(fname,lname,thumbnail) values ('${fname}','${lname}','${filename1}')`
            db.query(query1,(err,artists)=>{      
                res.send(utils.createResult(err,artists))
                console.log("inside usee")
            })

});

router.get('/',(req,res)=>{
    const query1=`select * from artist`
    db.query(query1,(err,artists)=>{
        res.send(utils.createResult(err,artists))
    })
})


module.exports=router