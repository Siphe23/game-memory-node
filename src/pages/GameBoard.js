import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flipCard, checkMatch } from '../redux/actions';
import Card from '../pages/Card';

function GameBoard() {
    const cards = useSelector((state) => state.game.cards);
    const flippedCards = useSelector((state) => state.game.flippedCards);
    const dispatch = useDispatch();

    const handleCardClick = (index) => {
        if (flippedCards.length < 2) {
            dispatch(flipCard(index));

            if (flippedCards.length === 1) {
                setTimeout(() => {
                    dispatch(checkMatch());
                }, 1000);
            }
        }
    };

    return (
        <div className="game-board">
            {cards.map((card, index) => (
                <Card key={index} card={card} onClick={() => handleCardClick(index)} />
            ))}
        </div>
    );
}

export default GameBoard;
