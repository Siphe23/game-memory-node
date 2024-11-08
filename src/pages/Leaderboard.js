import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchScores } from '../redux/reducers';

function Leaderboard() {
    const scores = useSelector((state) => state.game.scores);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchScores());
    }, [dispatch]);

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>{score.player}: {score.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default Leaderboard;
