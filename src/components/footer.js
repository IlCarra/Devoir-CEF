import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-4 text-start">
                        <h5>STEVAN CARRARA</h5>
                        <p>40 rue Laurie Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p>10 20 30 40 50</p>
                        <p>stevan.carrara@gmail.com</p>
                    </div>
                    <div className="col-md-4 text-start">
                        <h5>LIENS UTILES</h5>
                        <ul className="list-unstyled">
                            <li><a href="." className="text-white">Accueil</a></li>
                            <li><a href="." className="text-white">Services</a></li>
                            <li><a href="." className="text-white">Portfolio</a></li>
                            <li><a href="." className="text-white">Me Contacter</a></li>
                            <li><a href="." className="text-white">Mentions Légales</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-start">
                        <h5>MES DERNIÈRES RÉALISATIONS</h5>
                        <ul className="list-unstyled">
                            <li><a href="." className="text-white">Fresh Food</a></li>
                            <li><a href="." className="text-white">Restaurant Akira</a></li>
                            <li><a href="." className="text-white">Espace Bien-être</a></li>
                            <li><a href="." className="text-white">SEO</a></li>
                            <li><a href="." className="text-white">Création d'une API</a></li>
                            <li><a href="." className="text-white">Maquette d'un Site</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;