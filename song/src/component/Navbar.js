import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="nav-link active" aria-current="page" to="/" >gaana</Link>
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav  ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/myhome">myhome</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/myprofile">myprofile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/mydiscover">mydiscover</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/mymymusic">mymymusic</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/myradio">myradio</Link>
          </li>     
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <Link className="nav-link active" aria-current="page" to="/signup">signup</Link>
        <Link className="nav-link active" aria-current="page" to="/signin">signin</Link>
        <Link className="nav-link active" aria-current="page" to="/song">song</Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar