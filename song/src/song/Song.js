import React, { useEffect, useState } from 'react'
import Horizantleslider from './Horizantleslider';
import Songserver from './Songserver'
function Song() {

const [Songlist,Setsong]=useState([])


// useEffect(()=>{
//   console.log("1");
//   Songserver.getsong().then((result)=>
//   {
//     const song=result.data;
//     Setsong(song.data)

//   })
//   console.log(Songlist);
// });


       const Click=()=>{
                  Songserver.getsong().then((result)=>
                  {
                    const song=result.data;
                    Setsong(song.data)

                  })
                  console.log(Songlist);
       } 
// const renderlist=()=>{
// return(
//   Songlist.map((s)=>{
//     console.log(s)
//     return(
//       <tr>
//       <td>{s.sid}</td><td>{s.title}</td>
//     </tr>
//     ) 
//   })
// )
// }


  return (
    <div>song
    
      {/* <button type='button' onClick={Click}>getsong</button> */}
    
   {/* <button type='button' onClick={renderlist}>songlist</button> */}
  {/* { Songlist.map((s)=>{
    console.log(s)
    return(
      <tr>
      <td>{s.sid}</td><td>{s.title}</td>
    </tr>
    )
    }) 
  } */}
    
    <button type='button'  onClick={Click}>showsong</button>
  <Horizantleslider  Songc={Songlist}  title="allsongs"/>
      
    </div>
  )
}

export default Song