import React from 'react'
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand ml-5" to="/">
            <img src={logo} alt="logo" style={{width:'35px'}}/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item ml-5">
              <Link className="nav-link text-white text-uppercase" to="/">Home&nbsp;<i className="fas fa-home"></i></Link>
            </li>
            <li className="nav-item ml-5">
              <Link className="nav-link text-white text-uppercase" to="/news">news</Link>
            </li>
            <li className="nav-item ml-5">
              <Link className="nav-link text-white text-uppercase" to="/contacts">contact us</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

export default Navbar;