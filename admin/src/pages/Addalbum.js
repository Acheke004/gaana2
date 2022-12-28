import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Server from './Server'

const Addalbum =()=>{
    const [thumbnail,setthumbnail]=useState(undefined)
    const [albdata,setadd]=useState([])
    const [artist,setartist]=useState([])
    const [art1,setart]=useState('');


    useEffect(()=>{
        getart()
        console.log(art1)
    },[])

    const getart=()=>{
        Server.getartist().then((result)=>{
            const art=result.data
            if(art.data.length>0){
                setart(art.data[0])
            }
            setartist(art.data)
          })
    }

        const history=useHistory();
const handlechange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        setadd({...albdata,[name]:value})

}

const adddata=()=>{
    console.log(thumbnail)
    const art=new FormData()
    art.append('title',albdata.title)
    art.append('artistid',art1.artistid)
    art.append('duration',albdata.duration)
    art.append('thumbnail',thumbnail)
     console.log(albdata.title)


    Server.addalbum(art).then((res=>{
        const result=res.data
        // we can give a if conditions as per status
        const data=result.data
        console.log(data)
        history.push("/album")
    
    }))
}



const onfile=(event)=>{
           const file =event.target.files[0] 
           setthumbnail(file)
}

    return<div>
        <h1 className="page-title">Add album</h1>
        <div className="mb-3">
            <label htmlFor="">title</label>
            <input type="text" onChange={handlechange} name="title" className='form-control' required></input>
        </div>
        <div className="mb-3">
            <label htmlFor="">duration</label>
            <input type="number" onChange={handlechange} name="duration" className='form-control'></input>
        </div>
        <div className="mb-3">
            <label htmlFor="">artistid</label>
            <select className="form-control" onChange={setart} name="artistid">
                {
                    artist.map((artist1)=>{
                        return(<option  value={artist1.artistid}>{artist1.fname} {artist1.lname} </option>)
                    })
                }
            </select>
            {/* <input type="number" onChange={handlechange} name="artistid" className='form-control'></input> */}
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

export default Addalbum