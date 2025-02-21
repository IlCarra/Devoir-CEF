import React from 'react';

function Modal() {
    return (
        <div className="my-modal">
        <button type="button" className="btn btn-primary modalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            En savoir plus
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src='/images/image-stevan.png' alt='stevan' className='modal-image'></img>
                <div className='modal-info'>
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item">Stevan Carrara</li>
                        <li className="list-group-item">40 Rue Laure Diebold</li>
                        <li className="list-group-item">Je m'appelle Stevan Carrara, je suis italo-francais et j'adore le foot</li>
                        <li className="list-group-item">Repositories: 4</li>
                        <li className="list-group-item">Followers: 0</li>
                        <li className="list-group-item">Followings: 0</li>
                    </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Fermer</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Modal;