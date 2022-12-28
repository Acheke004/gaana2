import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Server from './Server'


const Addsong = () => {
    const [songfile, setsongfile] = useState(undefined)
    const [songdata, setadd] = useState([])
   const url="http://localhost:4000"
    //used to go another component
    const history = useHistory();
    //used to get the data passed by previous component
    const location = useLocation()
    //selected album in prev page
    const album = location.state.album
    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setadd({ ...songdata, [name]: value })
    }

    const adddata = () => {
        console.log(songfile)
        const art = new FormData()
        art.append('title', songdata.title)
        art.append('artistid', album.artistid)
        art.append('aid', album.aid)
        art.append('duration', songdata.duration)
        art.append('songfile', songfile)
        console.log(art)

        Server.addsong(art).then((res => {
            const result = res.data
            // we can give a if conditions as per status
            const data = result.data
            console.log(data)
            history.push("/album")

        }))
    }

    const onfile = (event) => {
        const file = event.target.files[0]
        setsongfile(file)
    }

    return <div>
        <h1 className="page-title">{album.title}</h1>
       <div className='row'>
        <div className='col-4'>
        <img src={url+"/"+album.thumbnail} style={{width:"200px",height:"200px" }}></img>
        </div>
      <div className='col-8'>
    
        <div className="mb-3">
            <label htmlFor="">title</label>
            <input type="text" onChange={handlechange} name="title" className='form-control' required></input>
        </div>
        <div className="mb-3">
            <label htmlFor="">duration</label>
            <input type="number" onChange={handlechange} name="duration" className='form-control'></input>
        </div>
        <div className="mb-3">
            <label htmlFor="">songfile</label>
            <input type="file" accept='audio/*' onChange={onfile} className='form-control'></input>
        </div>
        <div className="mb-3">
            <button type='button' onClick={adddata} className="btn btn-success">Add</button>
            {/* <Link to="/artist" ><a className="btn btn-warning">Cancle</a></Link> */}
            </div>
        </div>
    </div>
    </div>
}

export default Addsong