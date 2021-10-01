const express = require('express');
const app = express();
const cors = require('cors');

const { createMessage } = require('./controllers/messageCtrl');

app.use(express.json());
app.use(cors());

app.post('/api/messages', )

app.listen(4004, () => console.log('server accepting on 4004'))