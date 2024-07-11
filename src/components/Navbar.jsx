import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


function Navbar() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BlogApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    { isLoggedIn && <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <li><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/posts/new">Post</Link></li>
        <li><Link className="nav-link" to="/signin">LogIn</Link></li>
        <li><Link className="nav-link" to="/signup">Register</Link></li>

        { isLoggedIn && <li><Link className="nav-link" to="/logout">Logout</Link> </li>}
        
      </div>
    </div>}
  </div>
</nav>
    </div>
  )
}

export default Navbar