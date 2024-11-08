import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { shuffleCards } from './redux/actions';
import GameBoard from './pages/GameBoard';
import './App.css';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shuffleCards());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Memory Matching Game</h1>
            <GameBoard />
        </div>
    );
}

export default App;
