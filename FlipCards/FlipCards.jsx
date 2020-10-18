import React from 'react';
import './FlipCards.css';

const FlipCards = () => {


    return(
        <div className='flip'>
            <div className='flip-content'>
                <div className='flip-front'>
                    <img src="https://www.fillmurray.com/150/150" />
                </div>
                <div className='flip-back'>
                    <strong>Bill Murray</strong>
                </div>

            </div>
        </div>
    );

}

export default FlipCards