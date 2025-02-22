import React from 'react';
import './portfolioCards.css';

function PortfolioCards() {
    return(
        <div class="row row-cols-1 row-cols-lg-3 g-4">  

            <div class="col">
              <div class="card h-100">
                <img src="../images/portfolio/fresh-food.jpg" class="card-img-top" alt="Fresh food" />
                <div class="card-body">
                  <h5 class="card-title">Fresh Food</h5>
                  <p class="card-text">Site de vente de produits frais en ligne</p>
                  <a href="/" class="btn btn-primary projectCard">Voire le site</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Site réalisé avec PHP et MySQL</small>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="../images/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="Sushi" />
                <div class="card-body">
                  <h5 class="card-title">Restaurant Akira</h5>
                  <p class="card-text">Site de vente de produits frais en ligne</p>
                  <a href="/" class="btn btn-primary projectCard">Voire le site</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Site réalisé avec WorkPress</small>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="../images/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="Buddha statue and zen elements" />
                <div class="card-body">
                  <h5 class="card-title">Espace Bien-etre</h5>
                  <p class="card-text">Site de vente de produits frais en ligne</p>
                  <a href="/" class="btn btn-primary projectCard">Voire le site</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Site réalisé avec LARAVEL</small>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="../images/portfolio/seo.jpg" class="card-img-top" alt="SEO" />
                <div class="card-body">
                  <h5 class="card-title">SEO</h5>
                  <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                  <a href="/" class="btn btn-primary projectCard">Voire le site</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Utilisation des outils SEO</small>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="../images/portfolio/coder.jpg" class="card-img-top" alt="screen with code bars" />
                <div class="card-body">
                  <h5 class="card-title">Création d'une API</h5>
                  <p class="card-text">Création d'une API RESTFULL publique</p>
                  <a href="/" class="btn btn-primary projectCard">Voire le site</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">PHP - SYMFONY</small>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="../images/portfolio/screens.jpg" class="card-img-top" alt="Laptop and tablet" />
                <div class="card-body">
                  <h5 class="card-title">Maquette d'un site web</h5>
                  <p class="card-text">Création d'un prototype d'un site</p>
                  <a href="/" class="btn btn-primary projectCard">Voire le site</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Réalisé avec FIGMA</small>
                </div>
              </div>
            </div>
          </div>
    );
};

export default PortfolioCards;