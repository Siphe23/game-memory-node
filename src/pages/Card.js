import React from 'react';

function Card({ card, onClick }) {
    return (
        <div
            className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
            onClick={onClick}
        >
            {card.flipped || card.matched ? card.value : ' '}
        </div>
    );
}

export default Card;
