import React from 'react';
import PortfolioCards from '../components/portfolioCards';

const Portfolio = () => {
    return (
        <main>

            <div className='Banner-img'>
                <img src='../images/Banner.jpg' alt='Banner'></img>
            </div>

            <div className='realisations'>
                <h1>Portfolio</h1>
                <p>Voici quelques-unes des mes réalisations</p>
                <div className='portfolioLine'></div>
            </div>

            <PortfolioCards />


        </main>
    );
};

export default Portfolio;