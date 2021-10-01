const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get ('https://www.breakingbadapi.com/api/characters/1', (req, res) => {
    const foundChar = 
    res.status(200).send();
    console.log()
});

const serverPort = 5050;
app.listen(serverPort, () => {
    console.log(`Up on 5050`);
})

