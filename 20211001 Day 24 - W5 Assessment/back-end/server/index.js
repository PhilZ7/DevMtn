const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Have you considered a pre-nup?",
					 "But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere.",
					 '“I never lose. I either win or learn." ― Nelson Mandela',
           "You aren't as good looking as your mom says you are.",
           "Change is inevitable, except for vending machines.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/funny", (req, res) => {
  const funny = [ 'https://www.cheezburger.com', 'https://awkwardfamilyphotos.com', 'https://9gag.com'
  ];

  let randomIndex = Math.floor(Math.random() * funny.length);
  let randomFun = funny[randomIndex];

  res.status(200).send(randomFun);
  
});

app.get("/api/learn", (req, res) => {
  const learn = [ 'https://en.wikipedia.org/wiki/Special:Random' ];

  res.status(200).send(learn);
  
});

app.get("/api/color", (req, res) => {
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor)
  }
  var data = random_bg_color();
  res.status(200).send(data);
  
});

app.listen(4000, () => console.log("Server running on 4000"));