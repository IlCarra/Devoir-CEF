import React from 'react';

function Accordions() {
    return(
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Editeur de site
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <h4>Stevan Carrara</h4>
      <p><i class="bi bi-map"></i>40 rue Laure Diebold</p>
      <p><i class="bi bi-geo-alt"></i>69009 Lyon, France</p>
      <p><i class="bi bi-phone"></i>10 20 30 40 50</p>
      <p><i class="bi bi-envelope-at"></i>stevan.carrara@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h4>alwaysdata</h4>
        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <i class="bi bi-globe"></i><a href='/'>www.alwaysdata.com</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h4>Crédits</h4>
        <p>Ce site a été réalisé par Stevan Carrara, etudiant au <a href='/'>Centre Européen de Formation</a></p>
        <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href='/'>Pixabay</a></em></p>
        <p><em>La favicon de ce site a été fournie par <a href='/'>John doe Icons erstellt von Freepik - Flaticon</a></em></p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Accordions;