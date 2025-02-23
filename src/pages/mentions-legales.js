import React from 'react';
import Accordions from '../components/accordions';

const MentionsLegales = () => {
    return (
        <div className='mentionsContainer'>

            <div className='mentionsTitle'>
                <h1>Mentions Légales</h1>
            </div>
                
            <div className='mentionsLine'></div>

            <div className='accordionComponent'>
                <Accordions />
            </div>
            
        </div>
    );
};

export default MentionsLegales;