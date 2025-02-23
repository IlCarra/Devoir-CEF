import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function CustomNavBar() {
return (
    <nav class="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid nav-container">
          <a class="navbar-brand" href='/'>Stevan Carrara</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li className='nav-item'>
                <NavLink className='link' activeClassName='active' to="/">Home </ NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='link' activeClassName='active' to="../pages/service">Services </ NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='link' activeClassName='active' to="../pages/portfolio">Portfolio </ NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='link' activeClassName='active' to="../pages/contact">Contact </ NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='link' activeClassName="active" to="../pages/mentions-legales">Mentions Légales</NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    );
}

export default CustomNavBar;