// redux/actions.js

// Existing imports or definitions
import axios from 'axios';

export const fetchScores = () => async (dispatch) => {
    const response = await axios.get('http://localhost:5000/scores');
    dispatch({ type: 'FETCH_SCORES', payload: response.data });
};

export const addScore = (player, score) => async (dispatch) => {
    await axios.post('http://localhost:5000/scores', { player, score });
    dispatch(fetchScores());
};

// Action to shuffle cards (you could replace this with any logic needed to shuffle)
export const shuffleCards = () => ({
    type: 'SHUFFLE_CARDS'
});

// Action to flip a card
export const flipCard = (cardIndex) => ({
    type: 'FLIP_CARD',
    payload: cardIndex
});

// Action to check if two flipped cards match
export const checkMatch = () => ({
    type: 'CHECK_MATCH'
});
