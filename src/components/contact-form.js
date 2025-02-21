import React from 'react';

function ContactForm() {
    return (
        <form className='contactForm'>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Votre Nom" />
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Votre adresse mail" />
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Votre numéro de téléphone" />
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Sujet" />
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="14" placeholder="Votre message"></textarea>
        <div className='button'>
            <input class="btn btn-primary contactBtn" type="submit" value="Envoyer"></input>
        </div>
    </form>
    );
};

export default ContactForm;