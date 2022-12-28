import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="nav-link active" aria-current="page" to="/" >adminpanel</Link>
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav  ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/artist">Artist</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/album">Album</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/p">p</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/myuser">user</Link>
          </li>
          
        </ul>
        
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar