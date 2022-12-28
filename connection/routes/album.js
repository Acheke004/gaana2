const db=require('../db')
const utils=require('../util')
const express =require('express')
const router=express.Router()
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });

router.post('/',upload.single('thumbnail'),(req,res)=>{
    console.log("1")
    const{title,artistid,duration}=req.body
    const filename1=req.file.filename;
    const query1=`insert into album(title,artistid,duration,thumbnail) values ('${title}','${artistid}','${duration}','${filename1}')`
    db.query(query1,(err,album)=>{
            res.send(utils.createResult(err,album))
            console.log(err)
            console.log(album);
    })
})



router.get('/',(req,res)=>{
    const query1=`select * from album`
    db.query(query1,(err,album)=>{
        res.send(utils.createResult(err,album))
    })
})


module.exports=router