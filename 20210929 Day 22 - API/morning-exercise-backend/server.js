const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const users = [
    {
        id:1,
        usernameVal:'john',
        passwordVal:'12'
    },
    {
        id:2,
        usernameVal:'mary',
        passwordVal:'21'
    }
];

app.post('/api/users', (req, res) => {
    users.push(req.body)

    res.status(200).send(users)
})


app.listen(5050, () => console.log('Server up!'))