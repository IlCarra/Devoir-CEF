import React from 'react';
import ContactForm from '../components/contact-form';

const Contact = () => {
    return (
        <main className='contactFile'>
                <div className='titles'>
                    <h1>Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou une collaboration, merci de remplir le formulaire de contact</p>
                   <div className='contactLine'></div>
                </div>
            <div className='contactContainer'>
                <div className='formContainer'>
                    <h2>Formulaire de contact</h2>
                    <div className='formLine'></div>
                    <ContactForm />
                </div>
                
                <div className='infoContainer'>
                    <h2>Mes coordonnées</h2>
                    <div className='formLine'></div>
                    <div className='personalInfo'>
                        <h4>Stevan Carrara</h4>
                        <p><i class="bi bi-map"></i>40 rue Laure Diebold</p>
                        <p><i class="bi bi-geo-alt"></i>69009 Lyon, France</p>
                        <p><i class="bi bi-phone"></i>10 20 30 40 50</p>
                        <p><i class="bi bi-envelope-at"></i>stevan.carrara@gmail.com</p>                                                          
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.159385684231!2d4.793490585642455!3d45.77934128634116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sit!2sfr!4v1739992886221!5m2!1sit!2sfr" 
                            width="600" height="450" style={{ border: 0 }} allowfullscreen="" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='maps'>
                        </iframe>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;