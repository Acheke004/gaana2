 const mysql=require(`mysql2`)

 const pool=mysql.createPool({
    
    host:'localhost',
    user:'ashu',
    password:'ashu123',
    database:'gaana',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
 })
 console.log("inside db"),
 module.exports=pool