const express1=require('express')
const cors= require('cors')
const bodyParser =require('body-parser')

const app=express1()
app.use(cors('*')) 
app.use(bodyParser.json())

const routerUser=require('./routes/user')
const routerSong=require('./routes/song')
const routerAlbum=require('./routes/album')
const routerArtist=require('./routes/artist')

app.use('/user',routerUser)
app.use('/song',routerSong)
app.use('/album',routerAlbum)
app.use('/artist',routerArtist)
//
app.use(express1.static('uploads')) 


app.listen(4000,'0.0.0.0',()=>{
console.log('server started 4000');
})