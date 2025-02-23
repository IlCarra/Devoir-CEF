import React from 'react';

const Home = () => {
    return (
    <main>
        <div className='Background'>
          <h1>Bonjour je suis Stevan Carrara</h1>
          <h2>Développeur Full-Stack</h2>
        </div>
        <div className='container'>
        <div className='profile'>
          <div className='aboutMe'>
            <h2>A propos</h2>
            <hr></hr>
              <img src="/images/AboutMe.jpg" alt='Développer'></img>
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
          <div className='Skills'>
            <h2>Mes competences</h2>
            <hr></hr>
          </div>
        </div>
        </div>
    </main>
  );
};

export default Home;