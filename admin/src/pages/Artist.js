import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Server from './Server'
function Artist() {
  const [artist1,setartist]=useState([])

  const getartist=()=>{
   
    Server.getartist().then((result)=>{
      const art=result.data
      setartist(art.data)
    })
  }
  useEffect(()=>{
    getartist()
  },[]);
 const url="http://localhost:4000"



  return (
    <div>
<h1 className="page-title">Artist</h1>
<Link to='/addartist'>
<a className="btn btn-success"  >Add artist</a>
</Link>
<table className="table table-striped">

  <thead>
    <tr>
    <th>id</th>
    <th></th>
    <th>Name</th>
    <th>Option</th>
    </tr>
  </thead>
  <tbody>
    {artist1.map((a)=>{
return(
  <tr>
  <td>{a.artistid}</td>
  <td><img src={url+'/'+a.thumbnail} className="thumbnail-sm"></img></td>
  <td>{a.fname} {a.lname}</td>
  <td></td>
  </tr>
)
    })}
  </tbody>
</table>

    </div>
  )
}

export default Artist