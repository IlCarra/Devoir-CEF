import React from 'react';

const Services = () => {
    return (
        <main>
            <div className='Banner-img'>
                <img src='../images/Banner.jpg' alt='Banner'></img>
            </div>
            <div className='mesServices'>
                <h1>Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenire</p>
                <div className='serviceLine'></div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <i class="bi bi-brush"></i>
                            <div class="card-body">
                                <h5 class="card-title">UX DESIGN</h5>
                                <p class="card-text">
                                    L'UX Design est une discipline qui consiste à concevoir des produits 
                                    (sites web, applications mobiles, logiciels, objets connectés, etc) en placant l'utilisateur au centre 
                                    des préoccupations. L'objectif est de rendre l'experience utilisateur la plus fluide et agréable possible
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <i class="bi bi-code-slash"></i>
                            <div class="card-body">
                                <h5 class="card-title">Développement Web</h5>
                                <p class="card-text">
                                    Le développement des sites web consiste à créer des sites internet en utilisant des langages 
                                    de programmation (HTML, CSS, JavaScript, PHP, etc)
                                    et des frameworks (Bootstrap, React, Angular, etc).
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <i class="bi bi-search"></i>
                            <div class="card-body">
                                <h5 class="card-title">Référencement</h5>
                                <p class="card-text">
                                    Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web
                                    pour le faire remonter dans les résultat des moteurs de recherche (Google, Yahoo, Bing, etc).
                                    L'objectif est d'attirer un maximum de visiteur qualifiés sur le site.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Services;