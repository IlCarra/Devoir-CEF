import { useState, useEffect } from 'react';

function Modal() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const catchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/github-john-doe');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Errore nel recupero dei dati:', error);
            }
        };

        catchData();
            }, []); 

        if (!data) {
            return <div>Caricamento...</div>;
        }

    return (
        <div className="my-modal">
        <button type="button" className="btn btn-primary modalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            En savoir plus
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src='/images/image-stevan.png' alt='stevan' className='modal-image'></img>
                <div className='modal-info'>
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item"><i class="bi bi-person"></i>{data.name}</li>
                        <li className="list-group-item"><i class="bi bi-geo-alt"></i>{data.location || 'Location not specified'}</li>
                        <li className="list-group-item"><i class="bi bi-card-text"></i>{data.bio}</li>
                        <li className="list-group-item"><i class="bi bi-box"></i>Repositories: {data.public_repos}</li>
                        <li className="list-group-item"><i class="bi bi-people"></i>Followers: {data.followers}</li>
                        <li className="list-group-item"><i class="bi bi-people"></i>Followings: {data.following}</li>
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