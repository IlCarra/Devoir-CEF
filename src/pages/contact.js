import React from 'react';
import ContactForm from '../components/contact-form';

const Contact = () => {
    return (
        <main>
            <div className='titles'>
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou une collaboration, merci de remplir le formulaire de contact</p>
                <div className='contactLine'></div>
            </div>
            
            <div className='formContainer'>
                <h2>Formulaire de contact</h2>
                <div className='formLine'></div>
                <ContactForm />
            </div>
            
            <div className='infoContainer'>
                <h2>Mes coordonnées</h2>
                <div className='formLine'></div>
                <h4>Stevan Carrara</h4>
                <div className='personalInfo'>
                    <i class="bi bi-map">40 rue Laurie Diebold</i> 
                    <i class="bi bi-geo-alt">69009 Lyon, France</i>
                    <i class="bi bi-phone">10 20 30 40 50</i>
                    <i class="bi bi-envelope-at">stevan.carrara@gmail.com</i>
                </div>
            </div>
            
        </main>
    );
};

export default Contact;