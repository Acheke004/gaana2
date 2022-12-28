import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Server from './Server'
function Album() {
  const [album1,setalbum]=useState([])


const history=useHistory()


  const getalbum=()=>{
   
    Server.getalbum().then((result)=>{
      const art=result.data
      setalbum(art.data)
    })
  }
  useEffect(()=>{
    getalbum()
  },[]);
 const url="http://localhost:4000"



  return (
    <div>
<h1 className="page-title">Album</h1>
<Link to="/addalbum">
<button className="btn btn-success"  >Add album</button></Link>
<table className="table table-striped">

  <thead>
    <tr>
    <th>aid</th>
    <th></th>
    <th>title</th>
    <th>duration</th>
    <th>artistid</th>
    <th>addsong</th>
    </tr>
  </thead>
  <tbody>
    {album1.map((a)=>{
return(
  <tr>
  <td>{a.aid}</td>
  <td><img src={url+'/'+a.thumbnail} className="thumbnail-sm"></img></td>
  <td>{a.title} </td>
  <td>{a.duration} </td>
  <td>{a.artistid}</td>
  <td><button type="button"  onClick={()=>{
    //2nd parameter is album array to send
    history.push('/addsong',{album:a})
  }}   className="btn btn-success btn-sm" >add song</button></td>
  </tr>
)
    })}
  </tbody>
</table>

    </div>
  )
}

export default Album