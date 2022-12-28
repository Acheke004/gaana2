import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Server from './Server'

const Addartist =()=>{
    const [thumbnail,setthumbnail]=useState(undefined)
    const [artdata,setadd]=useState([])

        const history=useHistory();
const handlechange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setadd({...artdata,[name]:value})

}

const adddata=()=>{
    console.log(thumbnail)
    const art=new FormData()
    art.append('fname',artdata.fname)
    art.append('lname',artdata.lname)
    art.append('thumbnail',thumbnail)
     console.log(art)


    Server.addartist(art).then((res=>{
        const result=res.data
        // we can give a if conditions as per status
        const data=result.data
        console.log(data)

    
        history.push("/artist")
    
    }))
}



const onfile=(event)=>{
           const file =event.target.files[0] 
           setthumbnail(file)
}

    return<div>
        <h1 className="page-title">Add artist</h1>
        <div className="mb-3">
            <label htmlFor="">Fname</label>
            <input type="text" onChange={handlechange} name="fname" className='form-control' required></input>
        </div>
        <div className="mb-3">
            <label htmlFor="">Lname</label>
            <input type="text" onChange={handlechange} name="lname" className='form-control'></input>
        </div>
        <div className="mb-3">
            <label htmlFor="">thumbnail</label>
            <input type="file"  accept='image/*' onChange={onfile} className='form-control'></input>
        </div>
        <div className="mb-3">
            <button type='button'  onClick={adddata} className="btn btn-success">Add</button>
            {/* <Link to="/artist" ><a className="btn btn-warning">Cancle</a></Link> */}
            
        </div>
    </div>
}

export default Addartist