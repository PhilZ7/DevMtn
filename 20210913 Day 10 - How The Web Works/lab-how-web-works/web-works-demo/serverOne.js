const app = require('express')()

app.get('/', function(req, res) {
    res.status(200).send(`<h1>Devmountain rocks</h1>`)
})

app.listen(4000, function() {
    console.log('up and running on 4000!')
})