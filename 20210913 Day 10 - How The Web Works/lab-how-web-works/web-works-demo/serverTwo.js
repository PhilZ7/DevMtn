const express = require('express')
const app = express()

app.use(express.json())

let list = ['Cameron', 'Riley', 'Eric', 'Brenna']

app.get('/', function(req, res) {
    res.status(200).send(`<p>Hello, you can make requests to this server.</p>`)
})

app.get('/api/list', function(req, res) {
    res.status(200).send(list)
})

app.post('/api/list', function(req, res) {
    list.push(req.body.name) 
    res.status(200).send(list)
})

app.listen(4000, function() {
    console.log('you got a server on 4000')
})