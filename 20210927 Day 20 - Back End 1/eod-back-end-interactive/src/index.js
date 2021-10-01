const express = require('express');
const app = express();

app.use(express.json());

const songs = [
  {
    id: 1,
    name: 'Truth Hurts'
  },
  {
    id: 2,
    name: 'Ice Ice Baby'
  },
  {
    id: 3,
    name: 'We Will Rock You'
  }
];

app.get('/', (req, res) => {
  console.log('Someone got all the songs!');
  res.status(200).send(songs);
});

app.get('/songs/:requesteor/:id', (req, res) => {
  console.log(`${req.params.requestor} 
  requested song with id ${req.params.id}`);

  const foundIndex = songs.findIndex((song => song.id === +req.params.id);

  if (foundIndex === -1) 
    return res.status(400).send('<h1>SONG NOT FOUND!</h1>');

  res.status(200).send(songs[foundIndex]);
});

app.listen(5050, () => console.log('Server is up.'));