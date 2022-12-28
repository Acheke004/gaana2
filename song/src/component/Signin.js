import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Dataserver from './Dataserver';


function Signin () {

    const [log,setlog]=useState({email:'',pass:''})


    const handlechnage=(event)=>{
        const {name,value}=event.target;
        setlog({...log,[name]:value});
    }
const history=useHistory()

    const login=()=>{
        Dataserver.addlogin(log)
        .then((result)=>{
          console.log("123");
             console.log(result.data); 
             history.push("/home")
        })
    }

  return (
    <div>
        <form>
  <div className="form-group">
    <label htmlFor="emai" className="form-label" value="">email</label>
    <input type="email" className="form-control" id="emai" aria-describedby="emailHelp" name="email"
     value={log.email}
     onChange={handlechnage}/>
    
  </div>
  
  <div className="form-group">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="pass"
     value={log.pass}
     onChange={handlechnage}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={login}>login</button>
</form>
    </div>
  )
}

export default Signin