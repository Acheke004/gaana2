const db=require('../db')
const utils=require('../util')
const express =require('express')
const router=express.Router()
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });

router.get('/',(req,res)=>{
    const query1=`select * from song`
    db.query(query1,(err,song)=>{
        res.send(utils.createResult(err,song))
        //res.send(song)

    })
})

router.post('/',upload.single("songfile"),(req,res)=>{
    console.log("1")
    const{title,aid,artistid,duration}=req.body;
    const filename2=req.file.filename;
    const query1=`insert into song(title,aid,artistid,songfile,duration) values ('${title}','${aid}','${artistid}','${filename2}','${duration}')`
            db.query(query1,(err,song)=>{      
                res.send(utils.createResult(err,song))
                console.log(err)
                console.log(song)
                console.log("inside usee")
            })

});




module.exports=router