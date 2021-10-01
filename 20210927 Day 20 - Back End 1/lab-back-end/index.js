// Setup server requiring express/json
const express = require('express');
const app = express();
const cors = require('cors');
const { addAbortSignal } = require('stream');

app.use(express.json());

// Creating first endpoint to handle sending a friends array back to client
// (after middleware but above 'listen')
app.get('/api/users', (req, res) => {
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];
    res.status(200).send(friends);
})

app.get('/weather/:temperature', (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase)
});



// Setup server on port 4000
app.listen (4000, () => console.log('Server running on 4000'));




