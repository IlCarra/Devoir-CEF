import React from 'react';

function ProgressBars() {
    return(
        <div className='Bars'>
            <div className='htmlBar'>
                <p>HTML5</p>
                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-danger" style={{width: '90%'}}>90%</div>
                </div>
            </div>
            <div className='cssBar'>
                <p>CSS3</p>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-info text-dark" style={{width: '80%'}}>80%</div>
                </div>
            </div>
            <div className='jsBar'>
            <p>JAVASCRIPT</p>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-warning text-dark" style={{width: '70%'}}>70%</div>
                </div>
            </div>
            <div className='phpBar'>
                <p>PHP</p>
                <div class="progress" role="progressbar" aria-label="success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success" style={{width: '60%'}}>60%</div>
                </div>
            </div>
            <div className='reactBar'>
                <p>REACT</p>
                <div class="progress" role="progressbar" aria-label="Sucess example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-sucess" style={{width: '50%'}}>50%</div>
            </div>
            </div>
        </div>
    );
}

export default ProgressBars;