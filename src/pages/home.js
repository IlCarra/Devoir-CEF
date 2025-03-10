import React from 'react';
import ProgressBars from '../components/progressbar';
import Modal from '../components/modal';
import './home.css';


const Home = () => {
    return (
    <div>
        <div className='Background'>
          <h1>Bonjour je suis Stevan Carrara</h1>
          <h2>Développeur Full-Stack</h2>
          <Modal />
        </div>
        <div className='profile-container'>
          <div className='profile'>
            <div className='col aboutMe'>
              <h2>A propos</h2>
              <div className='homeLine'></div>
              <img src="/images/AboutMe.jpg" alt='Développer' className='img-fluid'></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam malesuada cursus. 
                Quisque eu mi dolor. Quisque sit amet tortor non tortor aliquam tempus. Sed diam lectus, 
                cursus ut interdum ut, rhoncus in dolor. 
              </p>
              <p>
                Sed feugiat neque eros, id consequat purus convallis a. Donec nec euismod purus. 
                Duis finibus, sem a hendrerit placerat, libero ante laoreet odio, nec finibus nisi orci id ligula. 
                Suspendisse potenti. Proin nec orci ac metus luctus laoreet.
              </p>
            </div>
            <div className='col Skills'>
              <h2>Mes competences</h2>
              <div className='homeLine'></div>
              <ProgressBars />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;