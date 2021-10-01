const users = []

const bcrypt = require('bcryptjs');

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        
        const { username, password } = req.body
        res.status(200).send(req.body)
        bcrypt.genSalt().then(salt => {
          bcrypt.hash(password, salt).then(hashedpassword => {
            req.body.password = hashedpassword;
          })
          users.push(req.body)  
          console.log(req.body)
        })
          
        }

    }