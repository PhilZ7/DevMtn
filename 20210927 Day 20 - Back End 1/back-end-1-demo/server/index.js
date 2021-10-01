const express = require('express');
const app = express();
const cors = require('cors');

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// DUMMY DATA
const items = ['stapler', 'cup', 'large golden bird statue', 'pencil', 'pikachu doll', 'paper', 'clock', 'paint', 'laptop', 'bike']

// ENDPOINTS
app.get('/api/inventory', (req, res) => {
    // console.log('hitting');

    if (req.query.item) {
        const filteredItems = items.filter((item, index, arr) => {
            return item.toLowerCase().includes(req.query.item.toLowerCase())
        });

        res.status(200).send(filteredItems);
        
    } else {
        res.status(200).send(items)
    }

    res.status(200).send(items);
});

app.get('/api/inventory/:indexPosition', (req, res) => {
    // console.log(req)
    res.status(200).send(items[+req.params.indexPosition]);
})

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
    console.log(`Your server is serving on ${SERVER_PORT}`)
});