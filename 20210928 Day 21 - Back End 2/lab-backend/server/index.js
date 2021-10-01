const express = require('express');
const app = express();
const cors = require('cors');

const houses = require('./db.json')
const { getHouses, deleteHouse, createHouse, updateHouse } = require ('./controller');

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ENDPOINTS

app.get('/api/houses', getHouses);
app.delete('/api/houses/:houseId', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:houseId', updateHouse);


const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => {
    console.log(`House server up on ${SERVER_PORT}`)
});