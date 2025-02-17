import React from 'react';

function CustomNavBar() {
return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href='.'>Stevan Carrara</a>
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
              <a class="nav-link" href="#services">Services</a>
              <a class="nav-link" href="#portfolio">Portfolio</a>
              <a class="nav-link" href="#contact">Contact</a>
              <a class="nav-link" href="#mentionslegales">Mentions légales</a>
            </div>
          </div>
    </nav>
    );
}

export default CustomNavBar;