import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer className="py-5 border-top bg-dark text-light w-100" data-bs-theme="dark" >
        <div className="container-fluid footer-container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 container-fluid ">
            <div className="col mb-3 my-column">
              <h5>Stevan Carrara</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">40 Rue Laure Diebold</li>
                <li className="nav-item mb-2">69009 Lyon, France</li>
                <li className="nav-item mb-2">10 20 30 40 50 60</li>
                <li className="nav-item mb-2">stevan.carrara@gmail.com</li>
                <li className="nav-item mb-2">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://github.com/IlCarra" className="nav-link text-light" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://x.com/i/flow/signup" className="nav-link text-light" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/stevancarrara/" className="nav-link text-light" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </li>
              </ul>
            </div>


            <div className="col mb-3 my-column">
              <h5>Liens utiles</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="/">Accueil </ NavLink> 
                </li>
                <li className="nav-item mb-2"> 
                    <NavLink className='f-link' to="../pages/service">Services </ NavLink>
                </li>
                <li className="nav-item mb-2"> 
                    <NavLink className='f-link' to="../pages/portfolio">Portfolio </ NavLink>
                </li>
                <li className="nav-item mb-2"> 
                    <NavLink className='f-link' to="../pages/contact">Me contacter </ NavLink>
                </li>
                <li className="nav-item mb-2"> 
                    <NavLink className='f-link' to="../pages/mentions-legales">Mentions Légales </NavLink> 
                </li>
              </ul>
            </div>

            <div className="col mb-3 my-column">
              <h5>Mes dernières réalisations</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="../pages/portfolio">Fresh Food </ NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="../pages/portfolio">Restaurant Akira </ NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="../pages/portfolio">Espace bien-etre </ NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="../pages/portfolio">SEO </ NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="../pages/portfolio">Création d'une API </ NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className='f-link' to="../pages/portfolio">Maquette d'un site </ NavLink>
                </li>
              </ul>
            </div>
        </div>
        </div>
    </footer>
    );
};

export default Footer;


