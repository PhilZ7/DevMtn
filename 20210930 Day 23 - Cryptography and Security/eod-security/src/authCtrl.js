
const bcrypt = require("bcryptjs");

const users = [
  {
    username: "ilikedogs",
    hash: "123123123"
  }
];

module.exports = {
  registerUser: (req, res) => {
    const { username, password } = req.body;
    console.log("hit");

    // username handling
    let foundUser = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        foundUser = true;
      }
    }

    if (foundUser) {
      res.status(400).send({ message: "Username already taken" });

      return;
    }

    // here we create a new user
    // password handling

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const newUser = { username, hash };

    users.push({ username, hash });

    res.status(200).send(newUser);
  }
};

//On POSTMAN: connecting to API and under body>raw>json
