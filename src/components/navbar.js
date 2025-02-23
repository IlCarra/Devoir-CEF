import React from 'react';
import { Link } from 'react-router-dom';

function CustomNavBar() {
return (
    <nav class="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href='/'>Stevan Carrara</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li className='nav-item'>
                <Link className='link' to="/">Home </ Link>
              </li>
              <li className='nav-item'>
                <Link className='link' to="../pages/service">Services </ Link>
              </li>
              <li className='nav-item'>
                <Link className='link' to="../pages/portfolio">Portfolio </ Link>
              </li>
              <li className='nav-item'>
                <Link className='link' to="../pages/contact">Contact </ Link>
              </li>
              <li className='nav-item'>
                <Link className='link' to="../pages/mentions-legales">Mentions Légales</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    );
}

export default CustomNavBar;