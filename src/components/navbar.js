import React from 'react';
import { Link } from 'react-router-dom';

function CustomNavBar() {
return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href='/'>Stevan Carrara</a>
            <div class="navbar-nav">
              <Link className='link' to="/">Home </ Link>
              <Link className='link' to="../pages/service">Services </ Link>
              <Link className='link' to="../pages/portfolio">Portfolio </ Link>
              <Link className='link' to="../pages/contact">Contact </ Link>
              <Link className='link' to="../pages/mentions-legales">Mentions Légales</Link>
            </div>
          </div>
    </nav>
    );
}

export default CustomNavBar;