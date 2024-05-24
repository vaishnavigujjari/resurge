import React from 'react';
import './StateCard.css';

const StateCard = ({ filteredStates }) => {
    return (
        <div className='main-card-container'>
            <div className='card-container'>
                {console.log(filteredStates)}
                {filteredStates.map((item, index) => {
                    return (
                        <div className='card'>
                            <img src={item.image_link} />
                            <div className='card-content'>
                                <h3>{item.state}</h3>
                                <p>{item.slogan}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StateCard;