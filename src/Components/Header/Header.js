import React from 'react';
import logo from '../../img/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import {

    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg  navbar-dark bg-primary ">
  <div className="container-fluid">
      <img src={logo} alt=""/>
    <Link  className="navbar-brand p-3" to="home">AmrFood.com </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item p-2">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item p-2">
          <Link  className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item p-2">
          <Link  className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item p-2 d-flex">
          <Link  className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item p-2  d-flex">
          <Link  className="nav-link" to="/login">Login</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;