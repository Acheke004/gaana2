import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'
import Dataserver from './Dataserver';
import { useHistory } from 'react-router-dom';
function Signup() {
     const [profile,setpro]=useState({fname:"",lname:"",email:"",pass:""});

     const handlechnage=(event)=>{
        const {name,value}=event.target;
        setpro({...profile,[name]:value});

     }
let history=useHistory();

     const adddata=()=>{
        Dataserver.addstudent(profile)
        .then((result)=>{
            console.log(result.data)
            history.push("/home");
        })
     }

    return (
        <div>
        <form>
  <div className="form-group">
    <label htmlFor="fname" className="form-label" value="">fname</label>
    <input type="text" className="form-control" id="fname" name="fname" aria-describedby="emailHelp"
    value={profile.fname}
    onChange={handlechnage}
    
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label" value="">lname</label>
    <input type="text" className="form-control" id="lname" aria-describedby="emailHelp" name="lname"
     value={profile.lname}
     onChange={handlechnage}/>

  </div>
  <div className="form-group">
    <label htmlFor="emai" className="form-label" value="">email</label>
    <input type="email" className="form-control" id="emai" aria-describedby="emailHelp" name="email"
     value={profile.email}
     onChange={handlechnage}/>
    
  </div>
  
  <div className="form-group">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="pass"
     value={profile.pass}
     onChange={handlechnage}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={adddata}>Submit</button>
</form>
</div>
    )
}

export default Signup