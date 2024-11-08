const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample in-memory storage for game results
let scores = [];

// Endpoint to get all scores
app.get('/scores', (req, res) => {
    res.json(scores);
});

// Endpoint to post a new score
app.post('/scores', (req, res) => {
    const { player, score } = req.body;
    if (player && score !== undefined) {
        scores.push({ player, score, date: new Date() });
        res.status(201).json({ message: 'Score added!' });
    } else {
        res.status(400).json({ message: 'Invalid data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
